import React, { useState } from 'react';
import './TweetFeed.css';
import TweetFeedBox from './tweetFeedBox/TweetFeedBox';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { IconButton } from '@material-ui/core';
import TweetPost from './tweetPost/TweetPost';
import { useHistory } from 'react-router';
import FlipMove from 'react-flip-move';
import { IUser } from '../feed/Feed';

export interface ITweetReply {
    id: number;
    parentTweetId: number;
    replyContent: string;
    replyImageURL: string;
    createdAt: Date;
    user: IUser;
}

function TweetFeed() {
    const history = useHistory();

    const goToFeed = () => {
        try {
            history.push('/twitter');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="tweetFeed">
            <div className="tweetFeed__header">
                <IconButton onClick={goToFeed}>
                    <KeyboardBackspaceIcon className="tweetFeed__button" />
                </IconButton>
                <h2>Tweet</h2>
            </div>
            <TweetFeedBox />
            <FlipMove>
                <TweetPost />
            </FlipMove>
        </div>
    );
}

export default TweetFeed;
