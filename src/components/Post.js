import React, { useState } from 'react'
import '../components/Post.css'
import Avatar from "@material-ui/core/Avatar"

const Post = ({ postId, imageURL, username, caption }) => {
    const [comments, setComments] = useState();


    // nested listener on each post 
    // waiting for a comment
    // then going into the db to grab the comment
    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }
        return () => {
            unsubscribe();
        }
    }, [postId]);
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="JosiahJames"
                    src="/static/images/avatar/1/jpg"
                />
                <h3>{username}</h3>
            </div>
            {/* header => avatar + username */}

            <img src={imageURL} alt="postImage" className="post__image" />
         

            <h4 className="post__text"><strong>{username}: </strong> {caption}</h4>
            

            
        </div>
    )
}

export default Post
