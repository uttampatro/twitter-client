import React from 'react';
import './Body.css';
import Feed from './components/feed/Feed';
import SideBar from './components/sideBar/SideBar';
import Widgets from './components/widgets/Widgets';

function Body() {
    return (
        <div className="body">
            <SideBar />
            <Feed />
            <Widgets />
        </div>
    );
}

export default Body;
