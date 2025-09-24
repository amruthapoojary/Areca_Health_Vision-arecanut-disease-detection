from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from torchvision import transforms
from PIL import Image
import timm

app = Flask(__name__)
CORS(app)

# -------------------------------
# Load trained models
# -------------------------------
models = {}

# Stem Bleeding Model
models['stem_bleeding'] = timm.create_model('deit3_small_patch16_224', pretrained=False, num_classes=2)
models['stem_bleeding'].load_state_dict(torch.load('model/stem_bleeding_deit3.pth', map_location=torch.device('cpu')))
models['stem_bleeding'].eval()

# Fruit Rot Model
models['fruit_rot'] = timm.create_model('deit3_small_patch16_224', pretrained=False, num_classes=2)
models['fruit_rot'].load_state_dict(torch.load('model/fruit_rot_deit1.pth', map_location=torch.device('cpu')))
models['fruit_rot'].eval()

# ✅ Yellow Leaf Model (newly added)
models['yellow_leaf'] = timm.create_model('deit3_small_patch16_224', pretrained=False, num_classes=2)
models['yellow_leaf'].load_state_dict(torch.load('model/yellow_leaf_model.pth', map_location=torch.device('cpu')))
models['yellow_leaf'].eval()

# -------------------------------
# Image Preprocessing
# -------------------------------
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5, 0.5, 0.5],
                         std=[0.5, 0.5, 0.5])
])

# -------------------------------
# Class Labels
# -------------------------------
CLASS_LABELS = {
    "stem_bleeding": ['diseased_stem', 'healthy_stem'],
    "fruit_rot": ['diseased_fruit', 'healthy_fruit'],
     "yellow_leaf": ['healthy_leaf', 'diseased_leaf'] # ✅ Added
}

# -------------------------------
# Prediction Route
# -------------------------------
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    if 'disease_type' not in request.form:
        return jsonify({'error': 'Missing disease_type (stem_bleeding, fruit_rot, yellow_leaf)'}), 400

    disease_type = request.form['disease_type']

    if disease_type not in models:
        return jsonify({'error': f'Invalid disease_type: {disease_type}'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Empty filename'}), 400

    try:
        image = Image.open(file.stream).convert('RGB')
        image_tensor = transform(image).unsqueeze(0)

        model = models[disease_type]
        with torch.no_grad():
            outputs = model(image_tensor)
            _, predicted = torch.max(outputs, 1)
            predicted_class = CLASS_LABELS[disease_type][predicted.item()]

        return jsonify({
            'disease_type': disease_type,
            'prediction': predicted_class
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5001)
