import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import tweetService from '../../../../../services/tweetService';
import './TweetBox.css';

function TweetBox() {
    const User = localStorage.getItem('user');
    const user = User ? JSON.parse(User) : undefined;
    const [content, setContent] = useState('');
    const [imageURL, setImageURL] = useState('');

    const tweet = async (e: any) => {
        e.preventDefault();
        try {
            const response = await tweetService.addTweet(
                content,
                imageURL,
                user.id
            );
            setContent('');
            setImageURL('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar>U</Avatar>
                    <input
                        onChange={e => setContent(e.target.value)}
                        value={content}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={imageURL}
                    onChange={e => setImageURL(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <button
                    onClick={tweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </button>

                {/* <Button
                    onClick={tweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button> */}
            </form>
        </div>
    );
}

export default TweetBox;
