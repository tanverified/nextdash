import React from "react";
import Image from "next/image";
import classes from '../styles/Profile.module.css';

function Profile({imageUrl, name}) {
  return (
    <div className={classes.profile}>
      <span>
        <Image
          src={imageUrl}
          alt="profile picture"
          width={29.82}
          height={28.24}
        />
      </span>
      <p>{name}</p>
    </div>
  );
}

export default Profile;
