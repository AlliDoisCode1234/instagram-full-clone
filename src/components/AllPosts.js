import React, { useState, useEffect } from 'react'
import "./AllPosts.css"
import { db } from "../firebase"
import Post from "./Post"
import Sidebar from './Sidebar'
import ImageUpload from './ImageUpload'

const AllPosts = () => {

    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);


    // Get Posts from DB
     useEffect(() => {
            // this is where the code runs
            // once when the app loads
            // and every time posts changes
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // every time a new post is added, this code fires...
            // takes a "snapshot" of the collection and changes

            // GET ALL POSTS:
            //
            //
            // setPosts(snapshot.docs.map(doc => doc.data()));

            // GET POST BY ID:
            //
            //
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })))

        })
    }, []);
    return (
        <div className="allPosts">
            <div className="allPosts__posts">
                <div className="allPosts__postsLeft">
                    {
                        posts.map(({ id, post }) => (
                            <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageURL={post.imageURL} />
                        ))
                    }

                </div>
                <div className="app__postsRight">
                    <Sidebar />
                </div>
                {user?.displayName ? (
                        <ImageUpload username={user.displayName} />
            
                    ): (
                        <h3>Sorry you need to login to upload</h3>
                    )}
            </div>
        </div>
    )
}

export default AllPosts
