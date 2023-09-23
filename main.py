from flask import Flask, render_template
from routes.rotas import Bp
from flask_assets import Environment, Bundle

app = Flask(__name__)
app.register_blueprint(Bp)
assets = Environment(app)

home = Bundle('sass/home.scss', filters='pyscss', output='css/home.css')
assets.register('home', home)

@app.route('/home')
def home():
    return render_template('home.html', assets=assets)

if __name__ == '__main__':
    app.run()
