import React, { useEffect, useState } from 'react';
import './App.css';
import Post from "./components/Post"
import { db } from "./firebase"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';




function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  // useEffect runs a piece of code based on a specific condition
  useEffect(() => {
    // this is where the code runs
    // once when the app loads
    // and every time posts changes
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added, this code fires...
      // takes a "snapshot" of the collection and changes

      // GET ALL POSTS:
      //
      //
      // setPosts(snapshot.docs.map(doc => doc.data()));

      // GET POST BY ID:
      //
      //
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))

    })
  }, []);

  


  return ( 
    // BEM naming convention
    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a modal</h2>
        </div>

      </Modal>

      {/* Header */}
      <div className="app__header">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app__headerImage" />
      </div>

      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL} />
        ))
      }
  

    </div>
  );
}

export default App;
