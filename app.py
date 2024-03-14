import streamlit as st
import pymongo

@st.experimental_singleton
def connect_db():
    client = pymongo.MongoClient(st.secrets["mongo"]["connection_url"])
    db = client.get_database('main')
    return db

user_db = connect_db()

if 'username' not in st.session_state:
    st.session_state.username = 'menkashah'
if 'form' not in st.session_state:
    st.session_state.form = ''

application = st.selectbox('Key features', ('menkashah', 'riashah'))
