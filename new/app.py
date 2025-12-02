from flask import Flask, render_template, send_file, jsonify
import os

app = Flask(__name__)

# Misol uchun ma'lumotlar
commands = [
    {"id": "1", "title": "Buyruq A", "file": "buyruq_a.pdf"},
    {"id": "2", "title": "Buyruq B", "file": "buyruq_b.pdf"}
]

infos = {
    "1": {"sender": "Markaziy HQ", "date": "2025-04-01", "recipient": "Okrug 1"},
    "2": {"sender": "Sharqiy HQ", "date": "2025-04-15", "recipient": "Okrug 2"}
}

news = [
    {"image": "news1.jpg", "text": "Yangi harbiy mashg'ulot boshlandi."},
    {"image": "news2.jpg", "text": "Texnika yangilandi."},
    {"image": "news3.jpg", "text": "Yillik hisobot tayyor."}
]

@app.route("/")
def home():
    return render_template("index.html", commands=commands, news=news)

@app.route("/view/<filename>")
def view_file(filename):
    return send_file(os.path.join("files", filename))

@app.route("/download/<filename>")
def download_file(filename):
    return send_file(os.path.join("files", filename), as_attachment=True)

@app.route("/info/<id>")
def info(id):
    return jsonify(infos.get(id, {}))

if __name__ == "__main__":
    app.run(debug=True)
