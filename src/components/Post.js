import React, { useState, useEffect } from 'react'
import '../components/Post.css'
import Avatar from "@material-ui/core/Avatar"
import { db } from "../firebase";

const Post = ({ postId, user, imageURL, username, caption }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');


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


    const postComment = (event) => {
        event.preventDefault();

        db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .add({
                text: comment,
                username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            setComment('');
    }


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

            <div className="post__comments">
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>
            
            <form className="post__commentBox">
                <input 
                    className="post__input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
                <button
                    className="post__button"
                    disabled={!comment}
                    type="submit"
                    onClick={postComment}
                >
                    Post
                </button>
            </form>

            
        </div>
    )
}

export default Post
