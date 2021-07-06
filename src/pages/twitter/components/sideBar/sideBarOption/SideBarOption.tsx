import React from 'react';
import "./SideBarOption.css";

interface SideBarOptionProps {
    text: string;
    Icon: any;
}

function SidebarOption({ text, Icon }: SideBarOptionProps) {
    return (
        <div className='sidebarOption'>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;
