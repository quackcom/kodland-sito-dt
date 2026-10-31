import random
from flask import Flask

app = Flask(__name__)

interesting_facts = [
    "1", "2", "3", "101", "202"
]

@app.route("/")
def hello_world():
    return '<h1>Hello world!!!</h1>'

@app.route("/secret")
def secret():
    return '<h1>Secret page!</h1>'

@app.route("/secret/ofsecret")
def secret2():
    return '<h1>Secret page 2!</h1>'

@app.route("/intfacts/")
def interesting_facts_random():
    return f'<p> <strong> {random.choice(interesting_facts)} </strong> </p>'

@app.route("/head-tail")
def head_or_tail():
    range = random.randrange(0, 2)
    choice = "Head" if range == 0 else "Tail"
    return f'<p> <strong> {choice} </strong> <p>'

app.run(debug=True)