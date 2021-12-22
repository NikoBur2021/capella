import YouTube from "../YouTube";
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles";
import {useSelector} from "react-redux";


function About() {
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" color="textSecondary" gutterBottom>
                    {translationMap.get('aboutHomeBtn')}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} align="center">
                <YouTube videoId={'7dOTcxZdiH4'}/>
            </Grid>
            <Grid item xs={12} sm={6} align="center">
                <YouTube videoId={'_QmW0X1-FPQ'}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <CardMedia className={`${classes.cardMedia} ${classes.aboutImages1}`}/>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                            {translationMap.get('aboutSPRING')}
                        </Typography>
                        <Typography>
                            {translationMap.get('aboutFirstPer')}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <CardMedia className={`${classes.cardMedia} ${classes.aboutImages2}`}/>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                            {translationMap.get('aboutLiturgy')}
                        </Typography>
                        <Typography>
                            {translationMap.get('aboutCherubim')}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <CardMedia className={`${classes.cardMedia} ${classes.aboutImages3}`}/>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                            {translationMap.get('aboutRehearsel')}
                        </Typography>
                        <Typography>
                            {translationMap.get('aboutRehSer')}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <CardMedia className={`${classes.cardMedia} ${classes.aboutImages4}`}/>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                            {translationMap.get('aboutSheep')}
                        </Typography>
                        <Typography>
                            {translationMap.get('aboutSheepMead')}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default About