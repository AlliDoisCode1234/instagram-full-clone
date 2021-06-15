import React, { useEffect, useState } from 'react';
import './App.css';
import Post from "./components/Post"
import { db, auth } from "./firebase"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import ImageUpload from './components/ImageUpload'
// import InstagramEmbed from 'react-instagram-embed';
import Sidebar from './components/Sidebar'





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

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // useEffect runs a piece of code based on a specific condition

  // SignUp

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user has logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        // the user has logged out...
        setUser(null)
      }
    })

    return () => {
      // perform some cleanup actions before you fire useEffect
      unsubscribe();
    }


  }, [user, username]);



  // Get Posts from DB
  useEffect(() => {
    // this is where the code runs
    // once when the app loads
    // and every time posts changes
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
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

  
const signUp = (event) => {
  event.preventDefault();

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username,
      })
    })
    .catch((error) => alert(error.message))

    setOpen(false)
}

const signIn = (event) => {
  event.preventDefault();

  auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))

  setOpenSignIn(false)
}


  return ( 
    // BEM naming convention
    <div className="App">

      

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app___signup">
            <center>
              <img 
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
              alt="app logo" 
              className="app__headerImage" />
            </center>
            <Input 
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="outlined" color="primary" onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app___signup">
            <center>
              <img 
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
              alt="app logo" 
              className="app__headerImage" />
            </center>
            <Input 
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="outlined" color="primary" onClick={signIn}>Sign In</Button>
          </form>
        </div>

      </Modal>

      {/* Header */}
      <div className="app__header">
        <img 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt="app logo" 
          className="app__headerImage" 
        />

        {user ? (
          <Button variant="outlined" color="primary" onClick={() => auth.signOut()}>Log Out</Button>
        ) : (
          <div className="app__loginContainer">
            <Button variant="outlined" color="primary" onClick={() => setOpenSignIn(true)}>Sign In</Button>
            <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
        )}
      </div> 
      <div className="app__posts">
          <div className="app__postsLeft">
            {
              posts.map(({ id, post }) => (
                <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageURL={post.imageURL} />
              ))
            }

          </div>
          <div className="app__postsRight">
            <Sidebar />
          </div>
      </div>
      {/* <InstagramEmbed
        className="app__embed"
        url='https://www.instagram.com/p/Ytlfl/'
        clientAccessToken='123|456'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}

      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ): (
        <h3>Sorry you need to login to upload</h3>
      )}

  

    </div>
  );
}

export default App;
