
import streamlit as st




@st.experimental_singleton
def connectDB():
    client = pymongo.MongoClient(
      st.secrets["mongo"]["connection_url"], 
      server_api=ServerApi('1'))
    db = client.get_database('main')
    return db.User

User = connectDB()

# Initialize Session States.
if 'username' not in st.session_state:
       st.session_state.username = 'menkashah'
if 'form' not in st.session_state:
       st.session_state.form = ''
        
# Key features selection, just to demonstrate how usernames are passed
application = st.selectbox('Key features', 
('menkashah', 'riashah'))
