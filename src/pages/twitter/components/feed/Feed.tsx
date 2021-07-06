import React, { useEffect, useState } from 'react';
import TweetBox from './tweetBox/TweetBox';
import './Feed.css';
import Post from './post/Post';
import TweetService from '../../../../services/tweetService';
import userServices from '../../../../services/userServices';
import { useHistory } from 'react-router';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    const fetchTweetList = async () => {
        try {
            const data = await TweetService.getTweetList();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTweetList();
    });

    const logout = async () => {
        try {
            await userServices.logout();
            history.push('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
                <button onClick={logout}>Logout</button>
            </div>
            <TweetBox />
            <FlipMove>
                {posts.map((post: any) => (
                    <Post key={post.id} post={post} />
                ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
