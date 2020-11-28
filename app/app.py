from flask import Flask, request, url_for, redirect, render_template
import threading

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def base():
    if request.method == "POST":
        print(request.form["character"])
        return redirect(url_for("base"))
    
    return render_template("build.html")

app.run()

if __name__ == "__main__":
    app.run()
