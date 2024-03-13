import streamlit as st
import pymongo
from pymongo import MongoClient

def main():
    st.title('Login Dashboard')

    username = st.text_input('Username')
    password = st.text_input('Password', type='password')

    if st.button('Login'):
        if verify_credentials(username, password):
            st.success('Login successful')
            # Redirect to your main dashboard or perform other actions
        else:
            st.error('Invalid username or password')

def verify_credentials(username, password):
    # Perform logic to verify username and password
    # This can be done by querying a database or using any other method
    # For demonstration purposes, we'll use a simple hardcoded check
   # Connect to the MongoDB database
    client = MongoClient(MONGODB_URI)
    db = client['dashboardapp']
    user = db['user']

    # Query the database to find the user with the given username
    user = users.find_one({'username': username})

    # If the user exists and the password matches, return True
    if user and user['password'] == password:
        return True
    else:
        return False
    return username == 'admin' and password == 'password'

if __name__ == '__main__':
    main()
