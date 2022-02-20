import React from "react";
import classes from "../styles/Main.module.css";
import FirstRow from "./Rows/FirstRow";
import FourthRow from "./Rows/FourthRow";
import SecondRow from "./Rows/SecondRow";
import ThirdRow from "./Rows/ThirdRow";
import Table from "./Table";


function Main({items}) {
  return (
    <div className={classes.main}>
      <FirstRow />
      <span className={classes.x}>x</span>
      <SecondRow />
      <ThirdRow/>
      <FourthRow/>
      <Table items={items}/>
    </div>
  );
}

export default Main;
