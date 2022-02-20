import React from "react";
import Card from "../Card";
import Button from "../Button";
import { RiShareBoxLine } from "react-icons/ri";
import classes from "../../styles/Main.module.css";

function ThirdRow() {
  return (
    <Card className={classes.thirdRow}>
      <div>
        <p>Your Rewards</p>
        <h2>$0.262314</h2>
        <Button className={classes.btnthird}>$40 AVAX</Button>
        <Button className={classes.btnthird}>$10 BNB</Button>
        <Button className={classes.btnthird}>$210 BTC</Button>
      </div>
      <Button className={classes.btnBlue}>
        <RiShareBoxLine className={classes.share} />
        <span>Custom Link</span>
      </Button>
    </Card>
  );
}

export default ThirdRow;
