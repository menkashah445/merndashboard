import streamlit as st
import requests

# def signup():
#     st.title("Sign Up")
#     username = st.text_input("Username")
#     email = st.text_input("Email")
#     password = st.text_input("Password", type='password')
#     password_confirm = st.text_input("Confirm Password", type='password')
#     if password != password_confirm:
#         st.error("Passwords do not match!")
#         return

#     if st.button("Signup"):
#         res = requests.post("http://localhost:8000/register", json={"username": username, "email": email, "password": password})
#         if res.status_code == 200:
#             st.success("Sign up successful! Please log in.")
#         else:
#             st.error("Error signing up.")

def login():
    st.title("Log In")
    email = st.text_input("Email")
    password = st.text_input("Password", type='password')
    res = requests.post("http://localhost:8000/login", json={"email": email, "password": password})
    if res.status_code == 200:
        user_data = res.json()
        st.success("Log in successful!")
        return user_data
    else:
        st.error("Error logging in.")

# def display_profile(user_data):
#     res = requests.get("http://localhost:5000/profile", headers={"Authorization": f"Bearer {user_data['access_token']}"})
#     user_data = res.json()

# Add the rest of your Streamlit app code here

if __name__ == "__main__":
    signup()
