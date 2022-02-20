import React from 'react'
import classes from '../styles/Toggle.module.css';
import { RiMoonClearFill ,RiSunLine} from "react-icons/ri";


function ToggleBtn() {
  return (
    <div className={classes.toggle}>
        <input type="checkbox" className={classes.checkbox} id="checkbox" />
        <label htmlFor="checkbox" className={classes.label}>
          <RiMoonClearFill className={classes.moon}/>
          <RiSunLine className={classes.sun}/>
          <div className={classes.ball}>
          </div>
        </label>
    </div>
  )
}

export default ToggleBtn