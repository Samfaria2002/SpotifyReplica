from flask import Flask, render_template, request, jsonify
from routes.rotas import Bp
from flask_assets import Environment, Bundle
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, auth
import os

app = Flask(__name__)
CORS(app)
app.register_blueprint(Bp)
assets = Environment(app)

cred = credentials.Certificate(os.path.join(os.path.dirname(__file__), 'credentials', 'login-77993-firebase-adminsdk-72fip-42ebb7b404.json'))
firebase_admin.initialize_app(cred)

if __name__ == '__main__':
    app.run(debug=True)
