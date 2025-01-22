import React from "react";
import "./style.css";

import CopyLink from "../CopyLink/CopyLink";

const ProfileCard = ({person}) => {
  return (
    <div className={`profile-card`}>
      <img src={person.src} alt={"Picture of " + person.name}/>
      <div className="wrapper">
        <div>
          <span className="name">{person.name}</span>
          <span className="email-wrapper">
            <CopyLink label="✉" content={person.email} description="email"/>
            <div className="popup">{person.email}</div>
          </span>
        </div>
        <div className="caption">{person.caption}</div>
      </div>
    </div>
  );
};
export default ProfileCard;
