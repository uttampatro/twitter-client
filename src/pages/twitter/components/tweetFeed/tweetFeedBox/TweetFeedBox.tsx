import React, { useState } from 'react';
import './TweetFeedBox.css';
import { Avatar, Button, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function TweetFeed() {
    const [replyContent, setReplyContent] = useState('');
    const [replyImageURL, setReplyImageURL] = useState('');

    return (
        <div className="tweetFeedBox">
            <div>
                <div className="tweetFeedBox__user">
                    <div className="tweetFeedBox__avatar">
                        <Avatar></Avatar>
                        <div className="tweetFeedBox__userBody">
                            <h3>user</h3>
                            <h4>username</h4>
                        </div>
                    </div>

                    <IconButton className="tweetFeedBox__button">
                        <MoreHorizIcon />
                    </IconButton>
                </div>
                <div className="tweetFeedBox__description">
                    <p>
                        Today, an icon who was loved by generations passes away.
                        Rest in peace Dilip ji. My condolences to the family
                        Folded hands
                    </p>
                    <p className="time_p">Time: 12:00pm</p>
                </div>
                <div className="tweetFeedBox__footer">
                    <IconButton>
                        <ChatBubbleOutlineIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <RepeatIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <PublishIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>

            <div className="tweetFeedBoxForm">
                <form>
                    <div className="tweetFeedBoxForm__input">
                        <Avatar></Avatar>
                        <input
                            onChange={e => setReplyContent(e.target.value)}
                            value={replyContent}
                            required
                            placeholder="What's happening?"
                            type="text"
                        />
                    </div>
                    <input
                        value={replyImageURL}
                        onChange={e => setReplyImageURL(e.target.value)}
                        className="tweetFeedBoxForm__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    />

                    <Button
                        // onClick={sendTweet}
                        type="submit"
                        className="tweetFeedBoxForm__tweetButton"
                    >
                        Reply
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default TweetFeed;
