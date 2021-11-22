import {AppBar, Button, Toolbar} from "@material-ui/core";
import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Welcome from "./Welcome";
import {useSelector} from "react-redux";


function Header() {
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    return (
        <AppBar position="fixed">
            <Toolbar >
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <Button   color='secondary' className={classes.sixPix} component={Link}
                                to='/'>
                            @nikodim.capella
                        </Button>
                    </Grid>
                    <Grid item xs={4} className={classes.mR50}>
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
                    <Grid item xs={1} className={classes.mR50}>
                        <Button  color="secondary" className={classes.sixPix}   component={Link} to="/performances">
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
                        <Welcome/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header