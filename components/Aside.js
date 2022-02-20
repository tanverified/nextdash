import React from "react";
import classes from "../styles/Aside.module.css";
import { BiWalletAlt } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import Button from "./Button";
import { RiShareBoxLine } from "react-icons/ri";
import { MdOutlineCancelPresentation } from "react-icons/md";

function Aside({ items }) {
  const src = items.data[1].chain.img;
  return (
    <div className={classes.aside}>
      <div>
        <div className={classes.dropdown}>
          <Image
            loader={() => src}
            src={src}
            alt="asset picture"
            width={27.82}
            height={27.24}
          />
          <select>
            <option value="avalanche">Avalanche</option>
          </select>
        </div>
        <div className={classes.dropdown2}>
          <BiWalletAlt className={classes.wallet} />
          <select>
            <option value="wallet">Wallet</option>
          </select>
        </div>
      </div>

      <div className={classes.customLink}>
        <p>
          <BiArrowBack className={classes.icon} /> Custom link
        </p>
      </div>

      <div className={classes.link}>
        <p>http://testnet.xyz.xyz/trade?ref=</p>
        <input type="text" placeholder="ENTER" />
        <div className={classes.buttons}>
          <Button className={classes.customBtn}>
            <RiShareBoxLine  className={classes.Rishare}/>
            <span>Custom Link</span>
          </Button>
          <Button className={classes.cancelBtn}>
            <MdOutlineCancelPresentation className={classes.cancelIcon} />
            <span>Cancel</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Aside;
