import streamlit as st
import requests
def signup(): 
  st.title("Sign Up")

username = st.text_input("Username") 
email = st.text_input("Email") 
password = st.text_input("Password", type='password') 
password_confirm = st.text_input("Confirm Password", type='password')

if password != password_confirm:
    st.error("Passwords do not match!")
    return


res = requests.post("http://localhost:5000/signup", json={"username": username, "email": email, "password": password})
if res.status_code == 200: 
  st.success("Sign up successful! Please log in.") 
else: 
  st.error("Error signing up.")

def login(): 
  st.title("Log In")
email = st.text_input("Email") 
password = st.text_input("Password", type='password')

res = requests.post("http://localhost:5000/login", json={"email": email, "password": password})
if res.status_code == 200: 
  user_data = res.json() # Set user data in local storage st.success("Log in successful!") return user_data else: st.error("Error logging in.")

def display_profile(user_data):res = requests.get("http://localhost:5000/profile", headers={"Authorization": f"Bearer {user_data['access_token']}"}) 
user_data = res.json()

st.title(user_data['username']) 
st.image(user_data['profile_picture'], width=100) 
st.write(f"Email: {user_data['email']}")

def main():
    user_data = st.local_storage.get("user_data")

if user_data: 
  display_profile(user_data)
else: 
if st.button("Sign Up"):
    signup()
if st.button("Log In"):
    user_data = login()
if user_data:
    st.local_storage.set("user_data", user_data)

if __name__ == '__main__':
    main()
