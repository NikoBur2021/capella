import {useDispatch, useSelector} from "react-redux";
import {switchToEn, switchToRu} from "../store/translationSlice";
import useStyles from "../styles";

function Welcome() {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <div className="App">
            <div className={classes.flags}>
                <div>
                    <button className={classes.us} onClick={() => dispatch(switchToEn())}></button>
                </div>
                    <button className ={classes.ru} onClick={() => dispatch(switchToRu())}></button>
            </div>
        </div>
    );
}

export default Welcome;