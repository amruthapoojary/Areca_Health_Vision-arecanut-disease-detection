from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import torch
from torchvision import transforms
from PIL import Image
import timm
from gtts import gTTS
import io
import os
import cv2
import numpy as np
from skimage.feature import graycomatrix, graycoprops

# ------------------------------------------------
# Flask Setup
# ------------------------------------------------
app = Flask(__name__)
CORS(app)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# ------------------------------------------------
# Create Save Directory
# ------------------------------------------------
SAVE_DIR = "uploaded_images"
os.makedirs(SAVE_DIR, exist_ok=True)

# ------------------------------------------------
# Load Models
# ------------------------------------------------
models = {}

# Part Model
models['part'] = timm.create_model('deit3_small_patch16_224', pretrained=False, num_classes=4)
models['part'].load_state_dict(torch.load('models/part_classifier_best.pth', map_location=device))
models['part'].to(device).eval()
part_classes = ['Fruit', 'Leaf', 'Trunk', 'not_areca']

# Leaf Model
models['leaf'] = timm.create_model('deit3_small_patch16_224', pretrained=False, num_classes=2)
models['leaf'].load_state_dict(torch.load('models/best_leaf_model.pth', map_location=device))
models['leaf'].to(device).eval()
leaf_classes = ['Healthy_Leaf', 'Yellow_leaf_disease']

# Fruit Model
models['fruit'] = timm.create_model('deit3_small_patch16_224', pretrained=False, num_classes=2)
models['fruit'].load_state_dict(torch.load('models/best_fruit_model.pth', map_location=device))
models['fruit'].to(device).eval()
fruit_classes = ['Fruit_rot', 'Healthy_Fruit']

# Trunk Model
models['trunk'] = timm.create_model('deit3_small_patch16_224', pretrained=False, num_classes=2)
models['trunk'].load_state_dict(torch.load('models/best_trunk_model.pth', map_location=device))
models['trunk'].to(device).eval()
trunk_classes = ['Healthy_Trunk', 'Stem_bleeding']

# ------------------------------------------------
# Transform
# ------------------------------------------------
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

# ------------------------------------------------
# Feature Extraction
# ------------------------------------------------
def extract_real_features(img_path):
    img = cv2.imread(img_path)
    img = cv2.resize(img, (224, 224))

    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    color_variation = np.std(hsv[:, :, 1])

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    glcm = graycomatrix(gray, distances=[5], angles=[0], levels=256, symmetric=True, normed=True)
    texture_pattern = graycoprops(glcm, 'contrast')[0, 0]

    edges = cv2.Canny(gray, 100, 200)
    shape_consistency = np.sum(edges > 0) / (224 * 224) * 100

    _, thresh = cv2.threshold(gray, 60, 255, cv2.THRESH_BINARY_INV)
    spot_density = np.sum(thresh > 0) / (224 * 224) * 100

    color_variation = np.clip(color_variation / 50 * 100, 0, 100)
    texture_pattern = np.clip(texture_pattern / 50 * 100, 0, 100)

    return [
        {"feature": "Color Variation", "weight": float(color_variation)},
        {"feature": "Texture Pattern", "weight": float(texture_pattern)},
        {"feature": "Shape Consistency", "weight": float(shape_consistency)},
        {"feature": "Spot Density", "weight": float(spot_density)}
    ]

# ------------------------------------------------
# Prediction Helper
# ------------------------------------------------
def predict_with_probs(model, classes, image):
    img_tensor = transform(image).unsqueeze(0).to(device)
    with torch.no_grad():
        outputs = model(img_tensor)
        probs = torch.softmax(outputs, dim=1).cpu().numpy()[0]

    conf = float(probs.max())
    pred_label = classes[int(probs.argmax())]
    prob_list = [{"label": classes[i], "prob": float(probs[i])} for i in range(len(classes))]

    return pred_label, conf, prob_list

# ------------------------------------------------
# PREDICT API
# ------------------------------------------------
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    img_path = os.path.join(SAVE_DIR, file.filename)
    file.save(img_path)

    image = Image.open(file.stream).convert('RGB')

    part, part_conf, part_probs = predict_with_probs(models['part'], part_classes, image)
    part_confidences = {part_classes[i]: float(part_probs[i]['prob']) for i in range(len(part_classes))}

    if part == 'not_areca':
        return jsonify({
            'prediction': 'not_areca',
            'part': 'not_areca',
            'confidence': part_conf,
            'condition_probs': [],
            'feature_importance': [],
            'disease_risk': 0,
            'part_confidences': part_confidences
        })

    if part == 'Leaf':
        disease, conf, cond_probs = predict_with_probs(models['leaf'], leaf_classes, image)
    elif part == 'Fruit':
        disease, conf, cond_probs = predict_with_probs(models['fruit'], fruit_classes, image)
    else:
        disease, conf, cond_probs = predict_with_probs(models['trunk'], trunk_classes, image)

    features = extract_real_features(img_path)
    disease_risk = round(conf * 0.8 + part_conf * 0.2, 4)

    disease_map = {
        'Healthy_Leaf': 'healthy_leaf',
        'Yellow_leaf_disease': 'diseased_leaf',
        'Healthy_Fruit': 'healthy_fruit',
        'Fruit_rot': 'diseased_fruit',
        'Healthy_Trunk': 'healthy_stem',
        'Stem_bleeding': 'diseased_stem'
    }

    prediction_key = disease_map.get(disease, "unknown")

    return jsonify({
        'prediction': prediction_key,
        'confidence': conf,
        'part': part,
        'part_confidence': part_conf,
        'part_probs': part_probs,
        'condition_probs': cond_probs,
        'feature_importance': features,
        'disease_risk': disease_risk,
        'part_confidences': part_confidences
    })

# ------------------------------------------------
# SHORT AUDIO API
# ------------------------------------------------
@app.route('/recommendation_audio', methods=['POST'])
def recommendation_audio():
    data = request.get_json()
    disease_type = data.get('condition', 'healthy_leaf')

    text_dict = {
        "not_areca": "This is not an arecanut plant.",
        "healthy_leaf": "The leaf looks healthy.",
        "diseased_leaf": "Yellow leaf disease detected on the leaf.",
        "healthy_fruit": "The fruit is healthy.",
        "diseased_fruit": "Fruit rot detected on the arecanut.",
        "healthy_stem": "The trunk is healthy.",
        "diseased_stem": "Stem bleeding detected on the trunk."
    }

    text = text_dict.get(disease_type, "The plant part appears normal.")

    tts = gTTS(text=text, lang='en')
    audio_bytes = io.BytesIO()
    tts.write_to_fp(audio_bytes)
    audio_bytes.seek(0)

    return send_file(audio_bytes, mimetype='audio/mpeg', download_name='recommendation.mp3')

# ------------------------------------------------
# DETAILED AUDIO API
# ------------------------------------------------
@app.route('/detailed_recommendation_audio', methods=['POST'])
def detailed_recommendation_audio():
    data = request.get_json()
    model_prediction = data.get("prediction", None)

    if model_prediction is None:
        model_prediction = "healthy_leaf"

    text_dict = {

        "not_areca":
        "This image does not belong to an arecanut plant. Upload a valid arecanut leaf, fruit or trunk image.",

        "healthy_leaf":
        "The leaf is healthy. Maintain proper irrigation, follow fertilizer schedule, and monitor regularly.",

        "diseased_leaf":
        "Yellow leaf disease detected. It is caused due to nutrient deficiency and poor soil aeration. "
        "Apply urea, potash, and micronutrients. Improve soil drainage.",

        "healthy_fruit":
        "The fruit is healthy. Avoid water stagnation and follow good farm hygiene.",

        "diseased_fruit":
        "Fruit rot detected. This is caused by Phytophthora fungi. "
        "Spray one percent Bordeaux mixture, remove infected nuts, and improve drainage.",

        "healthy_stem":
        "The trunk is healthy. Maintain good drainage and plantation hygiene.",

        "diseased_stem":
        "Stem bleeding detected. This is caused by Ganoderma fungus. "
        "Remove infected tissue, apply Trichoderma paste, and avoid excess water near the root zone."
    }

    text = text_dict.get(model_prediction, "No disease found.")

    tts = gTTS(text=text, lang='en')
    audio_bytes = io.BytesIO()
    tts.write_to_fp(audio_bytes)
    audio_bytes.seek(0)

    return send_file(audio_bytes, mimetype='audio/mpeg',
                     download_name='detailed_recommendation.mp3')

# ------------------------------------------------
# Run Server
# ------------------------------------------------
if __name__ == '__main__':
    app.run(debug=True, port=5001)
