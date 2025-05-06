import React from "react";
import "./ProfileCards.css";

const ProfileCards = ({name , img}) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card small-rect-card">
        <div className="profile-image">
          <img src={img} alt="Profile" />
        </div>
        <h2 className="profile-name">{name} </h2>
      </div>
    </div>
  );
};

export default ProfileCards;
