from flask import Flask, request, jsonify
from flask_cors import CORS 
import torch
from torchvision import transforms
from PIL import Image
import timm
import os

app = Flask(__name__)
CORS(app)  
# Load the trained model
model = timm.create_model('deit3_small_patch16_224', pretrained=False, num_classes=2)
model.load_state_dict(torch.load('model/stem_bleeding_deit3.pth', map_location=torch.device('cpu')))
model.eval()

# Image transformation (same as training)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5], std=[0.5])
])

# Class labels (based on folder names used during training)
CLASSES = ['diseased_stem', 'healthy_stem']

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        print("⚠️ No file key in request.files")
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        print("⚠️ Empty filename")
        return jsonify({'error': 'Empty filename'}), 400

    try:
        print(f"📦 Received file: {file.filename}")
        image = Image.open(file.stream).convert('RGB')
        print("✅ Image opened")

        image_tensor = transform(image).unsqueeze(0)
        print("✅ Image transformed")

        with torch.no_grad():
            outputs = model(image_tensor)
            _, predicted = torch.max(outputs, 1)
            predicted_class = CLASSES[predicted.item()]
            print(f"✅ Prediction: {predicted_class}")

        return jsonify({'prediction': predicted_class})

    except Exception as e:
        print(f"❌ Error processing image: {e}")
        return jsonify({'error': f'Error: {e}'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001) 
