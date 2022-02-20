import React from "react";
import Profile from "./Profile";
import { MdMenuOpen } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import classes from "../styles/Sidebar.module.css";
import data from "../assets/sidebarData";
import Image from "next/image";
import Button from "./Button";
import ToggleBtn from './ToggleBtn';

function Sidebar() {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <Profile imageUrl="/profile_picture.png" name="Name" />
        <MdMenuOpen className={classes.MdMenuOpen} />
      </div>
      <div className={classes.sideBarList}>
        {data.map(({ icon, title }) => {
          const Icon = icon;

          return (
            <span key={title}>
              <Icon className={classes.listIcon} />
              <p>{title}</p>
            </span>
          );
        })}
      </div>

      <div className={classes.buttons}>
        <Button className={classes.btnGray}>
          <Image
            src="/profile_picture.png"
            alt="profile"
            width={17.82}
            height={17.24}
          />
          <span>$0.90</span>
        </Button>

        <Button className={classes.btnCyan}>Buy $XYZ</Button>
      </div>
      <div>
        <div className={classes.bottom}>
          <BsGlobe2 />
          <ToggleBtn/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
