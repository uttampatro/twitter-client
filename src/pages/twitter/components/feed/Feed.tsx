import React, { useEffect, useState } from 'react';
import TweetBox from './tweetBox/TweetBox';
import './Feed.css';
import Post from './post/Post';
import TweetService from '../../../../services/tweetService';
import userServices from '../../../../services/userServices';
import { useHistory } from 'react-router';
import FlipMove from 'react-flip-move';
import TweetFeed, { ITweetReply } from '../tweetFeed/TweetFeed';

export interface ITweet {
    id: number;
    content: string;
    imageURL: string;
    createdAt: Date;
    user: IUser;
}

export interface IUser {
    id: number;
    email: string;
    username: string;
}

function Feed() {
    const User = localStorage.getItem('user');
    const user = User ? JSON.parse(User) : undefined;
    const [posts, setPosts] = useState<any[]>([]);
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
    }, []);

    const logout = async () => {
        try {
            await userServices.logout();
            history.push('/login');
        } catch (error) {
            console.log(error);
        }
    };

    // const goToReplyFeed = async (parentTweetId: number) => {
    //     try {
    //         const response = await TweetService.getReplyTweet(parentTweetId);
    //         setPosts(response);
    //         console.log(response);
    //         if (response) {
    //             history.push('/twitterReplyFeed');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
                <button onClick={logout}>Logout</button>
            </div>
            <TweetBox />
            <FlipMove>
                {posts?.map((post: any) => {
                    return (
                        <div>
                            <Post
                                // onClick={goToReplyFeed}
                                key={post.id}
                                post={post}
                            />
                        </div>
                    );
                })}
            </FlipMove>
            {}
            {/* <TweetFeed /> */}
        </div>
    );
}

export default Feed;
