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
          {"email" in person ?
            <span className="email-wrapper">
              <CopyLink content={person.email} description="email">
                <a href={`mailto:${person.email}`}>
                  <span className="material-icons">mail</span>
                </a>
              </CopyLink>
              <div className="popup">{person.email}</div>
            </span> : ""}
          {"name_caption" in person ?
            <span className="text-[0.75em]">{" " + person.name_caption}</span> : ""}
        </div>
        <div className="caption">{person.caption}</div>
      </div>
    </div>
  );
};
export default ProfileCard;
