import React, { useEffect, useState } from 'react';
import './Header.css'
import { auth } from "../firebase"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import { Link } from 'react-router-dom'
// import { auth } from "./firebase"



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





const Header = () => {
    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
  
    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);



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
        <div className="header">
           <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="header___signup">
                        <center>
                            <img 
                                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                                alt="app logo" 
                                className="header__headerImage" />
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
                    <form className="header___signup">
                        <center>
                            <img 
                                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                                alt="app logo" 
                                className="header__headerImage" />
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

            <div className="header__header">
                <Link to='/'>
                  <img 
                      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                      alt="app logo" 
                      className="header__headerImage" 
                  />
                </Link>

                {user ? (
                    <Button variant="outlined" color="primary" onClick={() => auth.signOut()}>Log Out</Button>
                ) : (
                    <div className="header__loginContainer">
                        <Button variant="outlined" color="primary" onClick={() => setOpenSignIn(true)}>Sign In</Button>
                        <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>Sign Up</Button>
                    </div>
                )}
            </div> 


        </div>
    )
}

export default Header
