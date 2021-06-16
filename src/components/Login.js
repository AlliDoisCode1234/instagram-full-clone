import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "../firebase";

const Login = () => {
        const history = useHistory();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const signIn = e => {
            e.preventDefault()

            auth
                .signInWithEmailAndPassword(email, password)
                .then((auth) => {
                    // it successfully logged the user in with email and password
                    if (auth) {
                        history.push('/')
                    }
                })
                .catch(error => alert(error.message))

            // some fancy firesbase login stuff

        }

        const register = e => {
            e.preventDefault()
            auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    // it successfully created a new user with email and password
                    //
                    console.log(auth)
                    if (auth) {
                        history.push('/')
                    }
                })
                .catch(error => alert(error.message))
             // some fancy firesbase register stuff

        }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login__logo"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                    alt="login logo" 
                    
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to INSTAGRAM FULL CLONE's Conditions of Use. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>Create your instagram account</button>
            </div>
        </div>
    )
}

export default Login