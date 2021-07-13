import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css';
import { ITweet } from '../Feed';
import CloseIcon from '@material-ui/icons/Close';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
} from '@material-ui/core';
import tweetService from '../../../../../services/tweetService';
import { useHistory } from 'react-router';

interface TweetListProps {
    post: ITweet;
    onClick: Function;
}

function Post(props: TweetListProps) {
    const { post, onClick } = props;
    const { content, imageURL, user, createdAt } = post;
    const { email, username } = user;

    const User = localStorage.getItem('user');
    const userExist = User ? JSON.parse(User) : undefined;
    const history = useHistory();

    const [replyContent, setReplyContent] = useState('');
    const [replyImageURL, setReplyImageURL] = useState('');
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);

    const replyTweet = async (e: any) => {
        e.preventDefault();
        try {
            const response = await tweetService.addTweetReply(
                replyContent,
                replyImageURL,
                post.id,
                userExist.id
            );
            setReplyContent('');
            setReplyImageURL('');
            setShowDialog(false);
        } catch (error) {
            console.log(error);
        }
    };

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
                        <p onClick={() => onClick(post.id)}>{content}</p>
                    </div>
                </div>
                <img src={imageURL} alt="" />
                <div className="post__footer">
                    <>
                        <IconButton onClick={openDialog}>
                            <ChatBubbleOutlineIcon fontSize="small" />
                        </IconButton>

                        <Dialog open={showDialog}>
                            <div>
                                {closeDialog ? (
                                    <IconButton
                                        aria-label="close"
                                        className="closeButton"
                                        onClick={closeDialog}
                                    >
                                        <CloseIcon className="closeButton" />
                                    </IconButton>
                                ) : null}
                            </div>
                            <DialogContent dividers>
                                <Box width="500px">
                                    <DialogContentText>
                                        <div className="dialogContentText">
                                            <Avatar>{username[0]}</Avatar>
                                            <div className="p">
                                                <h3>{username}</h3>
                                                <p>{content}</p>
                                            </div>
                                        </div>
                                        <p className="reply_p">
                                            Replying to{' '}
                                            <span className="reply_email">
                                                {email}
                                            </span>{' '}
                                        </p>
                                        <form>
                                            <div className="dialogContent">
                                                <Avatar>{username[0]}</Avatar>
                                                <div className="input">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={replyContent}
                                                        onChange={e =>
                                                            setReplyContent(
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Add another Tweet"
                                                    />
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                className="tweet__imageInput"
                                                value={replyImageURL}
                                                onChange={e =>
                                                    setReplyImageURL(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Optional: Enter image URL"
                                            />
                                        </form>
                                    </DialogContentText>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    onClick={replyTweet}
                                    variant="contained"
                                    className="tweetButton"
                                >
                                    Reply
                                </Button>
                            </DialogActions>
                        </Dialog>

                        <IconButton>
                            <RepeatIcon fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderIcon fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <PublishIcon fontSize="small" />
                        </IconButton>
                    </>
                </div>
            </div>
        </div>
    );
}

export default Post;
