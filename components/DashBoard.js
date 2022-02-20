import React from 'react';
import classes from '../styles/Dashboard.module.css'
import Sidebar from './Sidebar';
import Aside from './Aside';
import Main from './Main';

function DashBoard({items}) {
  return (
    <div className={classes.container}>
      <Sidebar/>
      <Main items={items}/>
      <Aside items={items}/>
    </div>
  )
}

export default DashBoard