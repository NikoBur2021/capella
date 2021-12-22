import {Button, Grid, Typography} from "@material-ui/core";
import YouTube from "../YouTube";
import React from "react";
import {useSelector} from "react-redux";
import useStyles from "../../styles";
import {Link} from "react-router-dom";

function Video() {
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} align="center" className={classes.myPadding2}>
                <Button variant="contained" color="primary" component={Link} to="/sever">
                    {translationMap.get('sever')}
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3" align="center" color="textSecondary" gutterBottom>
                    {translationMap.get('aboutHomeBtn')}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                    <YouTube videoId={'cTWeVuW-8AQ'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                    <YouTube videoId={'uVi9qB8VP7M'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                    <YouTube videoId={'B0ALJ6yEsr8'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                    <YouTube videoId={'dd9wR8OzmXQ'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                    <YouTube videoId={'s2v6i7RG2IY'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                    <YouTube videoId={'6Fz-OHxbUZo'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                    <YouTube videoId={'YTB8uNdyUvo'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                    <YouTube videoId={'oMCnqrDrXdQ'}/>
            </Grid>
        </Grid>
    )
}

export default Video