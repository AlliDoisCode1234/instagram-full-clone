import React, { useState } from 'react';
import './App.css';
import Post from "./components/Post"

function App() {
  const [posts, setPosts] = useState([
    {
      username: "josiahjames",
      caption: "WOW it works",
      imageURL: "https://www.poodled.com/wp-content/uploads/2019/07/2.-photo-1550948537-130a1ce83314.jpg"
    },
    {
      username: "josiahjames",
      caption: "WOW it works",
      imageURL: "https://www.poodled.com/wp-content/uploads/2019/07/2.-photo-1550948537-130a1ce83314.jpg"
    }
  ]);

  return ( 
    // BEM naming convention
    <div className="App">
     

     {/* Header */}
    <div className="app__header">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app__headerImage" />
    </div>

    {
      posts.map(post => (
        <Post username={post.username} caption={post.caption} imageURL={post.imageURL} />
      ))
    }
    <Post 
      imageURL="https://www.petlandflorida.com/wp-content/uploads/2021/01/Petland_Florida_Toy_Poodle.jpg" 
      username="josiahjames"
      caption="WOW it works"
    />
    <Post 
      imageURL="https://www.poodled.com/wp-content/uploads/2019/07/2.-photo-1550948537-130a1ce83314.jpg" 
      username="clementematthew"
      caption="minHeaps and maxHeaps will save your life!"
    />
    <Post 
      imageURL="https://redandapricotpoodles.com/wp-content/uploads/2020/07/questions-to-ask-your-poodle-breeder--1024x731.jpg" 
      username="leonnoel"
      caption="Google Better!"
    />
     {/* Posts */}
     {/* Posts */}


    </div>
  );
}

export default App;
