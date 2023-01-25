import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { gerLatestNotification } from "./utils";

function Notifications() {
    return (
        <div className="Notifications">
            <button 
            style={{color: '#3a3a3a'}} onclick={console.log("close button has been clicked")}>
                <img src={closeIcon} alt="closeIcon" width="10px"/>
            </button>
            <p>Here is the list of notification</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dengerusIysetInnerHTML={{__html: gerLatestNotification()}}></li>
            </ul>
        </div>
    )
}

export default Notification;