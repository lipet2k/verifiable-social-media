from flask import Flask, request
from flask_cors import CORS, cross_origin
from read_normalize import create_input_json

# Create a Flask app
app = Flask(__name__)

# Define a route and a function to handle the route
@app.route('/run_model')
@cross_origin()
def run_model():
    text = request.args.get('text')
    create_input_json(text)

if __name__ == '__main__':
    # Run the Flask app
    app.run()
