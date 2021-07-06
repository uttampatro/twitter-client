import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar>U</Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Uttam{' '}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />{' '}
                                @uttampatro
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>hello there!</p>
                    </div>
                </div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                    alt=""
                />
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
