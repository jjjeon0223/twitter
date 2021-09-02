import React, {useState} from 'react'
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "James Jeon",
            username: 'jjjeon0223',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://lh3.googleusercontent.com/a-/AOh14GhxlgTW7WfqGU6enFX2Dkbw3kYS_cBg7MMQVNXc_rU=s96-c-rg-br100"
        });

        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhxlgTW7WfqGU6enFX2Dkbw3kYS_cBg7MMQVNXc_rU=s96-c-rg-br100"/>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text"/>
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__inputImage"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
