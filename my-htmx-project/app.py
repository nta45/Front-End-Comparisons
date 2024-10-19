from flask import Flask, jsonify

app = Flask(__name__)

# Initialize the counter value
counter = 0

@app.route('/')
def serve_index():
    # This will serve the static HTML file
    return app.send_static_file('index.html')

@app.route("/increment")
def increment():
    global counter
    counter += 1
    # Return the updated HTML snippet
    return f"<span id='count'>{counter}</span>"

@app.route("/decrement")
def decrement():
    global counter
    counter -= 1
    return f"<span id='count'>{counter}</span>"

@app.route("/reset")
def reset():
    global counter
    counter = 0
    return f"<span id='count'>{counter}</span>"

if __name__ == "__main__":
    app.run(debug=True)
