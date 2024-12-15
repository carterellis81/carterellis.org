from waitress import serve
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def landing_page():
    return render_template('index.html')

@app.route('/christmas')
def wish_list():
    return render_template('wishlist.html')

@app.route('/oldhome')
def old_home():
    return render_template('oldindex.html')

@app.route('/seizure')
def canvas():
    return render_template('canvas.html')

serve(app, port=5000)