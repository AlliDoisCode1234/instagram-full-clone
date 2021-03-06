import React, { useEffect} from 'react';
import './App.css';
// import Post from "./components/Post"
// import { db } from "./firebase"
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
// import { Input } from '@material-ui/core';
// import ImageUpload from './components/ImageUpload'
// import InstagramEmbed from 'react-instagram-embed';
// import Sidebar from './components/Sidebar'
import Footer from './components/Footer';
// import Home from './components/Home';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
// import Header from './components/Header';
import AllPosts from './components/AllPosts';
import Login from './components/Login';
import { useStateValue } from './StateProvider';





// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));


function App() {

  const [{}, dispatch] = useStateValue();

    useEffect(() => {
      //
      // will only run once when the app component loads... 
      //

      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);

        if (authUser) {
          // the user just logged in / the user was logged in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        } else {
          // the user is logged out

          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })   
    }, [])
  // const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);

  // const [posts, setPosts] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [openSignIn, setOpenSignIn] = useState(false);
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [user, setUser] = useState(null);

  // useEffect runs a piece of code based on a specific condition


  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // the user has logged in...
  //       console.log(authUser);
  //       setUser(authUser);
  //     } else {
  //       // the user has logged out...
  //       setUser(null)
  //     }
  //   })

  //   return () => {
  //     // perform some cleanup actions before you fire useEffect
  //     unsubscribe();
  //   }


  // }, [user, username]);



  // Get Posts from DB
  // useEffect(() => {
  //   // this is where the code runs
  //   // once when the app loads
  //   // and every time posts changes
  //   db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //     // every time a new post is added, this code fires...
  //     // takes a "snapshot" of the collection and changes

  //     // GET ALL POSTS:
  //     //
  //     //
  //     // setPosts(snapshot.docs.map(doc => doc.data()));

  //     // GET POST BY ID:
  //     //
  //     //
  //     setPosts(snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       post: doc.data()
  //     })))

  //   })
  // }, []);

  





  return ( 
    // BEM naming convention
    <Router>
      <div className="App">
        <Switch>
          <Route path ="/login">
            <Login />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/">
            <Header />
            <AllPosts />
            <Footer /> 
          </Route>      
          {/* {user?.displayName ? (
            <ImageUpload username={user.displayName} />
            
          ): (
            <h3>Sorry you need to login to upload</h3>
          )} */}     
        </Switch>
      </div>
    </Router>
  );
}

export default App;
