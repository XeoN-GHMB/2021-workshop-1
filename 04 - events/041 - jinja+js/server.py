from flask import Flask, render_template

app = Flask(__name__, template_folder=".")

@app.route("/")
def start():
    return render_template('index.html', title="Jinja")

if __name__ == '__main__':
    app.run(host='localhost', port='8000', debug=True)