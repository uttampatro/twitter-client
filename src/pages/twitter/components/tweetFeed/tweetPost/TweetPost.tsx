import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './TweetPost.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function TweetPost() {
    return (
        <div className="tweetPost">
            <div className="tweetPost__avatar">
                <Avatar></Avatar>
            </div>
            <div className="tweetPost__body">
                <div className="tweetPost__header">
                    <div className="tweetPost__headerText">
                        <h3>
                            username{' '}
                            <span className="tweetPost__headerSpecial">
                                <VerifiedUserIcon className="tweetPost__badge" />{' '}
                                email . createdAt
                            </span>
                        </h3>
                    </div>
                    <div className="tweetPost__headerDescription">
                        <p>content</p>
                    </div>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt=""
                />
                <div className="tweetPost__footer">
                    <>
                        <IconButton>
                            <ChatBubbleOutlineIcon fontSize="small" />
                        </IconButton>

                        {/* <Dialog open={showDialog}>
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
                                    Tweet
                                </Button>
                            </DialogActions>
                        </Dialog> */}

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

export default TweetPost;
