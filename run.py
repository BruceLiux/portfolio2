import config
from app import app
app.run(host=config.env['host'], port=config.env['port'], debug=True)