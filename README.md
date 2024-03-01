Flask User Management Application
This is a Flask application that uses the Flask-SQLAlchemy and Flask-Login extensions for user management. The application also uses a custom security module named ivan.security for password hashing.

Features
User Registration: New users can register with a username, email, and password. The password is hashed using the generate_password_hash function from the ivan.security module before it is stored in the database.
User Login: Registered users can log in using their email and password. The check_password_hash function from the ivan.security module is used to verify the password.
User Logout: Logged-in users can log out. The logout_user function from the Flask-Login extension is used to log out the user.
Protected Area: There is a protected area that only logged-in users can access. This area is protected using the login_required decorator from the Flask-Login extension.
Setup and Installation
Clone the repository:
git clone <repository-url>

Navigate to the project directory:
cd <project-directory>

Install the required Python packages:
pip install flask flask_sqlalchemy flask_login

Set the Flask application environment variable:
export FLASK_APP=app.py

Run the Flask application:
flask run

Usage
After running the Flask application, navigate to http://localhost:5000 in your web browser. From there, you can register a new user, log in, access the protected area, and log out.

Contributing
Contributions are welcome! Please read the contributing guidelines before making any changes.

License
This project is licensed under the terms of the MIT license. The source code is available in the app.py file. Please note that you will need to provide your own SECRET_KEY as an environment variable for the Flask application to work properly. The SQLite database site.db is used for storing user data. The ivan.security module is required for password hashing and verification. 
