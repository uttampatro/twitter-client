import React, { useState } from 'react';
import './SideBar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SideBarOption from './sideBarOption/SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    IconButton,
    Avatar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TweetService from '../../../../services/tweetService';

function SideBar() {
    const User = localStorage.getItem('user');
    const user = User ? JSON.parse(User) : undefined;
    const [showDialog, setShowDialog] = useState(false);
    const [content, setContent] = useState('');
    const [imageURL, setImageURL] = useState('');

    const sendTweet = async (e: any) => {
        e.preventDefault();
        try {
            const response = await TweetService.addTweet(
                content,
                imageURL,
                user.id
            );
            // if (content === '') {
            //     alert('content must required');
            // }
            setContent('');
            setImageURL('');
            setShowDialog(false);
        } catch (error) {
            console.log(error);
        }
    };

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <div className="sidebar__active">
                <SideBarOption Icon={HomeIcon} text="Home" />
            </div>
            <SideBarOption Icon={SearchIcon} text="Explore" />
            <SideBarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SideBarOption Icon={MailOutlineIcon} text="Messages" />
            <SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SideBarOption Icon={ListAltIcon} text="Lists" />
            <SideBarOption Icon={PermIdentityIcon} text="Profile" />
            <SideBarOption Icon={MoreHorizIcon} text="More" />

            <>
                <Button
                    onClick={openDialog}
                    variant="outlined"
                    className="sidebar__tweet"
                    fullWidth
                >
                    Tweet
                </Button>
                <Dialog open={showDialog}>
                    <div>
                        {closeDialog ? (
                            <IconButton
                                aria-label="close"
                                className="sidebar__closeButton"
                                onClick={closeDialog}
                            >
                                <CloseIcon className="sidebar__closeButton" />
                            </IconButton>
                        ) : null}
                    </div>
                    <DialogContent dividers>
                        <Box width="500px">
                            <DialogContentText>
                                <form>
                                    <div className="sidebar__dialogContent">
                                        <Avatar>{user.username[0]}</Avatar>
                                        <div className="input">
                                            <input
                                                onChange={e =>
                                                    setContent(e.target.value)
                                                }
                                                value={content}
                                                required
                                                placeholder="What's happening?"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        value={imageURL}
                                        onChange={e =>
                                            setImageURL(e.target.value)
                                        }
                                        className="sidebar__imageInput"
                                        placeholder="Optional: Enter image URL"
                                        type="text"
                                    />
                                </form>
                            </DialogContentText>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={sendTweet}
                            variant="contained"
                            className="tweetButton"
                        >
                            Tweet
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        </div>
    );
}

export default SideBar;
