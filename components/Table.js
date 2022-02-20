import React, { useState } from "react";
import classes from "../styles/Table.module.css";
import TabOneTable from "./TabOneTable";

function Table({items}) {
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);

  const tabOneHandle = () => {
    setTabOne(true);
    setTabTwo(false);
    console.log(tabOne);
  };

  const tabTwoHandle = () => {
    setTabTwo(true);
    setTabOne(false);
  };

  return (
    <>
      <div className={classes.tabsGroup}>
        <div
          className={tabOne ? "tabbtn active" : "tabbtn"}
          onClick={tabOneHandle}
        >
          First tab
        </div>
        <div
          className={tabTwo ? "tabbtn active" : "tabbtn"}
          onClick={tabTwoHandle}
        >
          Second Tab
        </div>
      </div>
      <div>
        {tabOne && <TabOneTable items={items}/>}

        {tabTwo && <div className={classes.tabTwoContent}>No Content</div>}
      </div>
    </>
  );
}

export default Table;
