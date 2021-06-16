import React from 'react'
import './Home.css'
import Header from './Header'
import AllPosts from './AllPosts'


const Home = () => {
    return (
        <div className="home">
            <Header />
            <AllPosts />
        </div>
    )
}

export default Home
