<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;

  from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('contact.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return render_template('index.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run()
?>