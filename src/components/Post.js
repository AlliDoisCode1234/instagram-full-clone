import React from 'react'
import '../components/Post.css'

const Post = () => {
    return (
        <div className="post">
            <h3>Username</h3>
            {/* header => avatar + username */}

            <img src="https://www.petlandflorida.com/wp-content/uploads/2021/01/Petland_Florida_Toy_Poodle.jpg" alt="postImage" className="post__image" />
         

            <h4 className="post__text"><strong>josiahjames: </strong> WOW today was a good day!</h4>
            

            
        </div>
    )
}

export default Post
