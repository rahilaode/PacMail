from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
bcrypt = Bcrypt(app)

# Sesuaikan URL koneksi ke PostgreSQL Anda
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:qwerty123@localhost/pacmail'
db = SQLAlchemy(app)

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        print('Received data:', data)

        hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

        new_user = users(
            fullName=data['fullName'],
            email=data['email'],
            password=hashed_password
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully'})
    except Exception as e:
        print('Error processing signup:', str(e))
        return jsonify({'error': 'Error processing signup'}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        print('Received login data:', data)

        user = users.query.filter_by(email=data['email']).first()

        if user and bcrypt.check_password_hash(user.password, data['password']):
            return jsonify({'message': 'Login successful'})
        else:
            return jsonify({'error': 'Invalid email or password'}), 401
    except Exception as e:
        print('Error processing login:', str(e))
        return jsonify({'error': 'Error processing login'}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables on startup
    app.run(debug=True)
