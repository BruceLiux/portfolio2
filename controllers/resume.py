from flask import *
import config

resume = Blueprint('resume', __name__, template_folder='templates')

@resume.route('/resume')
def resume_route():
    return render_template("resume.html")