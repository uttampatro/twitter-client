import React from 'react';
import TweetBox from './tweetBox/TweetBox';
import './Feed.css';
import Post from './post/Post';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post />
        </div>
    );
}

export default Feed;
