import React from "react";
import "./style.css";

const ProfileCard = ({person}) => {
  return (
    <div className={`profile-card`}>
      <figure>
        <img src={person.src} alt={"Picture of " + person.name}/>
        <figcaption>
          <div>
            <span className="name">{person.name}</span>
            <span className="email-wrapper">
              <span className="email" title="click to copy email">✉</span>
              <p className="popup">{person.email}</p>
            </span>
            
          </div>
          <p className="caption">{person.caption}</p>
        </figcaption>
      </figure>
    </div>
  );
};
export default ProfileCard;
