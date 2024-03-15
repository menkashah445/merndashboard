import streamlit as st
import requests

def signup():
    st.title("Sign Up")
    username = st.text_input("Username")
    email = st.text_input("Email")
    password = st.text_input("Password", type='password')
    submit = st.form_submit_button("Login")
    res = requests.post("http://localhost:8000/auth/register", json={"username": username, "email": email, "password": password})
    if res.status_code == 200:
        st.success("Sign up successful! Please log in.")
    else:
        st.error("Error signing up.")

def login():
    st.title("Log In")
    email = st.text_input("Email")
    password = st.text_input("Password", type='password')
    res = requests.get("http://localhost:8000/auth/login", json={"email": email, "password": password})
    if res.status_code == 200:
        user_data = res.json()
        st.success("Log in successful!")
        st.session_state.user_data = user_data
        return user_data
    else:
        st.error("Error logging in.")

def display_profile():
    user_data = st.session_state.user_data
    st.title(user_data['username'])
    # st.image(user_data['profile_picture'], width=100)
    st.write(f"Email: {user_data['email']}")

def main():
    st.title("DASHBOARD")
    st.write("Welcome to the Bobble DashBoard! Please sign up or log in to get started.")
    if 'user_data' not in st.session_state:
        st.session_state.user_data = None

    if st.session_state.user_data:
        display_profile()
    else:
        if st.button("Sign Up"):
            signup()
        if st.button("Log In"):
            user_data = login()
            if user_data:
                st.session_state.user_data = user_data

if __name__ == '__main__':
    main()
