import classes from "../../styles/Main.module.css";
import Card from "../Card";
import { IoCopySharp } from "react-icons/io5";
import { RiUserShared2Fill } from "react-icons/ri";
import { useState } from "react";

function RefCard() {
  const [text, setText] = useState("http://unityexchange.design");

  const copyHandle = () => {
    setText("http://unityexchange.design");
  };

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  return (
    <Card>
      <p className={classes.cardHead}>
        <span className={classes.iconRef}>
          <RiUserShared2Fill />
        </span>
        <span className={classes.refText}>12.5%</span> of fee
      </p>
      <p className={classes.referral}>Your Refferral Link for xyz</p>
      <div className={classes.innerCard}>
        <input value={text} readOnly onChange={copyHandle} />
        <IoCopySharp className={classes.copy} onClick={copy} disabled={!text} />
      </div>
    </Card>
  );
}

export default RefCard;
