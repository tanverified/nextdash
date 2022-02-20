import React from "react";
import classes from "../../styles/Main.module.css";
import RefCard from "./RefCard";

function FourthRow() {
  return (
    <div className={classes.fourthRow}>
      <RefCard />
      <RefCard />
    </div>
  );
}

export default FourthRow;
