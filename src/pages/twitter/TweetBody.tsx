import React from 'react';
import './TweetBody.css';
import TweetFeed from './components/tweetFeed/TweetFeed';
import SideBar from './components/sideBar/SideBar';
import Widgets from './components/widgets/Widgets';

function Body() {
    const User = localStorage.getItem('user');
    const userExist = User ? JSON.parse(User) : undefined;

    if (!userExist) {
        return <>Loading...</>;
    }
    return (
        <div className="tweetBody">
            <SideBar />
            <TweetFeed />
            <Widgets />
        </div>
    );
}

export default Body;
