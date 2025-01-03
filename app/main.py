import os

from waitress import serve
from flask import Flask
from flask import render_template

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='test',
        DATABASE=os.path.join(app.instance_path, 'app.sqlite')
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

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

    @app.route('/test')
    def testauth():
        return render_template('auth/register.html')

    #return 404 page
    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('404.html'), 404
    
    import db
    db.init_app(app)

    import blueprints.auth as auth
    app.register_blueprint(auth.bp)
    
    return app

serve(create_app(), port=5000, threads=10)