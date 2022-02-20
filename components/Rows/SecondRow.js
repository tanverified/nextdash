import { ImDatabase} from "react-icons/im";
import Button from "../Button";
import classes from "../../styles/Main.module.css";


function SecondRow() {
  return (
    <div className={classes.row_two}>
        <div className={classes.blue}>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button className={classes.btnWhite}>Tutorial</Button>
          </div>
          <div>
            <ImDatabase className={classes.dbIcon}/>
          </div>
        </div>
      </div>
  )
}

export default SecondRow