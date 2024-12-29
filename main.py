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

@app.route('/pictures')
def pictures():
    return render_template('pictures.html')

#return 404 page
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

serve(app, port=5000, threads=10)