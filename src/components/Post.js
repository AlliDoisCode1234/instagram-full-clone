import React from 'react'
import '../components/Post.css'
import Avatar from "@material-ui/core/Avatar"

const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="JosiahJames"
                    src="/static/images/avatar/1/jpg"
                />
                <h3>Username</h3>
            </div>
            {/* header => avatar + username */}

            <img src="https://www.petlandflorida.com/wp-content/uploads/2021/01/Petland_Florida_Toy_Poodle.jpg" alt="postImage" className="post__image" />
         

            <h4 className="post__text"><strong>josiahjames: </strong> WOW today was a good day!</h4>
            

            
        </div>
    )
}

export default Post
