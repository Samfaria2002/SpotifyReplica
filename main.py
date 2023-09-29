from flask import Flask, render_template, request, jsonify
from routes.rotas import Bp
from flask_assets import Environment, Bundle
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, auth

app = Flask(__name__)
CORS(app)
app.register_blueprint(Bp)
assets = Environment(app)

cred = credentials.Certificate()
firebase_admin.initialize_app(cred)

@app.route('/register', methods=['POST'])
def register():
    try:
        email = request.json.get('email')
        password = request.json.get('password')

        user = auth.create_user(
            email = email,
            password = password
        )
        return jsonify({'message': 'Usuário registrado com sucesso!'})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
