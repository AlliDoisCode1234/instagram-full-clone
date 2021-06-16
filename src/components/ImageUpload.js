import React, { useState } from 'react'
import './ImageUpload.css'
import Button from '@material-ui/core/Button';
import { storage, db  } from '../firebase';
import firebase from "firebase";



const ImageUpload = ({username}) => {
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred /snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            (error) => {
                // Error function... 
                console.log(error);
                alert(error.message);
            },
            () => {
                // complete function ... 
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image inside db
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageURL: url,
                            username: username,
                        });


                        setProgress(0);
                        setCaption('');
                        setImage(null);

                    })
            }
        )

    }


    return (
        <div className="imageUpload">

            <div className="imageUpload__top">
                <progress className="imageUpload__progress" value={progress} max="100" />
                <input className="imageUpload__caption" type="text" placeholder="Enter a caption." value={caption} onChange={event => setCaption(event.target.value)} />
                <input className="imageUpload__file" type="file" onChange={handleChange} />
                <Button 
                    className="imageUpload__buttons" 
                    onClick={handleUpload}
                    >
                    Upload
                </Button>
            </div>
        </div>

    )
}

export default ImageUpload
