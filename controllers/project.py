from flask import *
import config

project = Blueprint('project', __name__, template_folder='templates')

@project.route('/project')
def project_route():
    return render_template("project.html")