import React from "react";
import { BiWalletAlt } from "react-icons/bi";
import Button from "../Button";
import classes from "../../styles/Main.module.css";




function FirstRow() {
  return (
    <>
      <div className={classes.row_one}>
        <p className={classes.para}>Section</p>
        <div className={classes.tab}>
          <BiWalletAlt className={classes.wallet} />
          <p>0.2 $XYZ </p>
          <Button className={classes.btn}>Tier 1</Button>
        </div>
      </div>
    </>
  );
}

export default FirstRow;
