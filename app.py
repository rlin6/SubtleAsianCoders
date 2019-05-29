from flask import Flask, request, render_template
app = Flask(__name__, template_folder='templates')

@app.route("/")
def chem():
    return render_template('index.html')

@app.route("/physics")
def physics():
    return render_template('physics.html')

if __name__ == "__main__":
    app.debug = True
    app.run()
