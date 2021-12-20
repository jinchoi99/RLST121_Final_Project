from flask import Flask, render_template, request, flash
import unse

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

@app.route("/calc", methods=["POST", "GET"])
def calc():
  name = str(request.form['name_input'])
  sex = str(request.form['sex_input'])
  year = str(request.form['year_input'])
  month = str(request.form['month_input'])
  day = str(request.form['day_input'])
  hour = str(request.form['hour_input'])
  exp = unse.all(name, sex, year, month, day, hour)
  # exp =" unse.all(name, sex, year, month, day, hour)"
  return render_template("sajupalja-result.html", rName=name, rYear=year, rMonth=month, rDay=day, rHour=hour, rSex=sex, rExp = exp)

if __name__ == "__main__":
  app.debug = True
  app.run()