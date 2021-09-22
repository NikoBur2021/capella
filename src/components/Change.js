import {change} from "../store/counterSlice";
import {useDispatch} from "react-redux";
import {Button, Grid} from "@material-ui/core";
import useStyles from "../styles";
import Count from "./components/Count";
import React from "react";

function Change() {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Button color="secondary" className={classes.sixPix}  onClick={() => dispatch(change( -5))}>DISPATCHER</Button>
                </Grid>
                <Grid item xs={1}>
                    <Count/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Change;