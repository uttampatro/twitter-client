import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect } from 'react';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css';
import { ITweet } from '../Feed';

interface TweetListProps {
    post: ITweet;
}

function Post(props: TweetListProps) {
    const { post } = props;
    const { content, imageURL, user, createdAt } = post;
    const { email, username } = user;

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar>{username[0]}</Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {username}{' '}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />{' '}
                                {email} . {createdAt}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{content}</p>
                    </div>
                </div>
                <img src={imageURL} alt="" />
                <div className="post__footer">
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
        </div>
    );
}

export default Post;
