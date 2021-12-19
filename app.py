from flask import Flask, render_template, request, flash
app = Flask(__name__)

@app.route("/")
def home():
  return render_template("home.html")

@app.route("/survey")
def survey():
  return render_template("survey.html")

@app.route("/summary")
def summary():
  return render_template("summary.html")

@app.route("/mbti")
def mbti():
  return render_template("mbti.html")

@app.route("/facereader")
def facereader():
  return render_template("facereader.html")

@app.route("/sajupalja")
def sajupalja():
  return render_template("sajupalja.html")

if __name__ == "__main__":
  app.run()