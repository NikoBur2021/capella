import {AppBar, Button,Toolbar} from "@material-ui/core";
import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Welcome from "./Welcome";
import {useSelector} from "react-redux";
import {Avatar} from "@mui/material";


function Header() {
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button  color='secondary' className={classes.sixPix} component={Link}
                                to='/'>
                            <Avatar src="/160752.png" className={classes.avatar}/>
                            @nikodim.capella
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button color='secondary' className={classes.sixPix} component={Link} to="/">
                            {translationMap.get('homeHeaderBtn')}
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button color="secondary" className={classes.sixPix} component={Link} to="/about">
                            {translationMap.get('aboutHeaderBtn')}
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button  color="secondary" className={`${classes.sixPix} ${classes.myPadding}`} component={Link} to="/performances">
                            {translationMap.get('performancesHeaderBtn')}
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button  color="secondary" className={classes.sixPix} component={Link} to="/donate">
                            {translationMap.get('donateHeaderBtn')}
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button  color="secondary" className={classes.sixPix} component={Link} to="/contact">
                            {translationMap.get('contactHeaderBtn')}
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <div>
                            <Welcome/>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header