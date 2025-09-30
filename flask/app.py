from flask import Flask, request
import os
from datetime import datetime

app = Flask(__name__)

# Folder to save images on C: drive
SAVE_FOLDER = "C:/Arecanut_Images"
os.makedirs(SAVE_FOLDER, exist_ok=True)  # Create folder if it doesn't exist

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return "No file uploaded", 400

    file = request.files['file']

    # Save with timestamp to avoid overwriting
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{SAVE_FOLDER}/image_{timestamp}.jpg"
    file.save(filename)

    return f"Image saved as {filename}", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5003)