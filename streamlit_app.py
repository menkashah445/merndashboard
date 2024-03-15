import streamlit as st
import requests

def signup():
    st.title("Sign Up")
    username = st.text_input("Username")
    email = st.text_input("Email")
    password = st.text_input("Password", type='password')
    password_confirm = st.text_input("Confirm Password", type='password')

    if st.button("Signup"):
        # Add your signup logic here
        pass
        res = requests.post("http://localhost:8000/register", json={"username": username, "email": email, "password": password})

# Add the rest of your Streamlit app code here

if __name__ == "__main__":
    signup()
