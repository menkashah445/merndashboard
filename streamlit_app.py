import streamlit as st
import requests
def signup(): 
  st.title("Sign Up")
    username = st.text_input("Username") 
email = st.text_input("Email") 
password = st.text_input("Password", type='password') 
password_confirm = st.text_input("Confirm Password", type='password')
