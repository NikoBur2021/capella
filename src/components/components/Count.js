import {useSelector} from "react-redux";
import useStyles from "../../styles";

function Count() {
    const classes = useStyles()
    const count = useSelector(state => state.counter.value)
    return(
        <div className={classes.count}> {count}</div>
    )
}
export default Count;