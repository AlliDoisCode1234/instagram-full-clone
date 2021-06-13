import React, { useEffect, useState } from 'react';
import './App.css';
import Post from "./components/Post"
import { db } from "./firebase"

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect runs a piece of code based on a specific condition
  useEffect(() => {
    // this is where the code runs
    // once when the app loads
    // and every time posts changes
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added, this code fires...
      // takes a "snapshot" of the collection and changes
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

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
 

    </div>
  );
}

export default App;
