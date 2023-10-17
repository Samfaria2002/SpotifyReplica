from flask import Flask, Blueprint, render_template, url_for, jsonify, request, send_file
from flask_assets import Environment
from firebase_admin import credentials, auth

Bp = Blueprint('Bp', __name__)

@Bp.route('/home')
def home():
    return render_template('home.html')


@Bp.route('/login', methods=['POST'])
def register():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')

        user = auth.create_user(
            email=email,
            password=password
        )
        return jsonify({'message': 'Usuário registrado com sucesso'}), 200
    except Exception as e:
        return jsonify({'error': str(e)})
