import React from 'react';
import './Body.css';
import Feed from './components/feed/Feed';
import SideBar from './components/sideBar/SideBar';
import Widgets from './components/widgets/Widgets';

function Body() {
    const User = localStorage.getItem('user');
    const userExist = User ? JSON.parse(User) : undefined;

    if (!userExist) {
        return <>Loading...</>;
    }
    return (
        <div className="body">
            <SideBar />
            <Feed />
            <Widgets />
        </div>
    );
}

export default Body;
