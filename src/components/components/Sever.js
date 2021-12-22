import {Breadcrumbs,Grid, Typography,Link} from "@material-ui/core";
import YouTube from "../YouTube";
import React from "react";
import {useSelector} from "react-redux";
import useStyles from "../../styles";


function Sever(){
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    function handleClick() {

    }
    return (
        <Grid container spacing={3}>
            <div className={classes.bread}>
                <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                     {translationMap.get('homeHeaderBtn')}
                </Link>
                <Link color="inherit" href="/video" onClick={handleClick}>
                    {translationMap.get('seeMyVideos')}
                </Link>
                <Typography color="textPrimary">{translationMap.get('sever')}</Typography>
            </Breadcrumbs>
            </div>
            <Grid item xs={12}>
                <Typography variant="h3" align="center" color="textSecondary" gutterBottom>{translationMap.get('sever')}</Typography>
                <Typography variant="h3" align="center" color="textSecondary" gutterBottom>{translationMap.get('sever1')}</Typography>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                        <YouTube videoId={'Wy1R9wFEj6Q'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                        <YouTube videoId={'ovgm9YmvXiQ'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                        <YouTube videoId={'BNY3L-irXO0'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                        <YouTube videoId={'YTB8uNdyUvo'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                        <YouTube videoId={'YTB8uNdyUvo'}/>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                        <YouTube videoId={'q6qzyLYSby0'}/>
            </Grid>
        </Grid>
    )
}
export default Sever