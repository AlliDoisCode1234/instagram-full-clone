import './App.css';
import Post from "./components/Post"

function App() {
  return ( 
    // BEM naming convention
    <div className="App">
     

     {/* Header */}
    <div className="app__header">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app__headerImage" />
    </div>
    <Post />
     {/* Posts */}
     {/* Posts */}


    </div>
  );
}

export default App;
