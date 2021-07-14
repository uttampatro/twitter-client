import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import tweetService from '../../../../../services/tweetService';
import './TweetBox.css';

function TweetBox() {
    const User = localStorage.getItem('user');
    const user = User ? JSON.parse(User) : undefined;
    const [text, setText] = useState('');
    const [imageURL, setImageURL] = useState('');

    const sendTweet = async (e: any) => {
        e.preventDefault();
        try {
            const response = await tweetService.addTweet(
                text,
                imageURL,
                user.id
            );
            setText('');
            setImageURL('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar>{user.username[0]}</Avatar>
                    <input
                        onChange={e => setText(e.target.value)}
                        value={text}
                        placeholder="What's happening?"
                        type="text"
                        required
                    />
                </div>
                <input
                    value={imageURL}
                    onChange={e => setImageURL(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
