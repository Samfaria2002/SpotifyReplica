from main import *
from flask import Flask, Blueprint, render_template, url_for
from flask_assets import Environment

Bp = Blueprint('Bp', __name__)