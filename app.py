from flask import Flask, render_template, session, url_for, request


app = Flask(__name__)

app.secret_key = "Jeawuo342130ukgkdfahweudi43qBYIUG3742bd*&"

#Home Page
@app.route('/')
def index():
  return render_template('index.html')


if __name__ == '__main__':
  app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
  app.run(debug=True)