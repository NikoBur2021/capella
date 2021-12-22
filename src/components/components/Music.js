import Grid from "@material-ui/core/Grid";
import {Button, Card, CardMedia} from "@material-ui/core";
import useStyles from "../../styles";
import React from "react";



import pdf from "../../images/Херувимская Софрониевская Чесноков.pdf"
import {useSelector} from "react-redux";



function Music(){
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} align="center" className={classes.myPadding2}>
                        <Button variant="contained" color="primary" href={pdf}>
                            {translationMap.get('download')}
                        </Button>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                <Card className={classes.card}>
                        <CardMedia className={`${classes.cardMediaMusic} ${classes.musicImage1}`}/>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                <Card className={classes.card}>
                        <CardMedia className={`${classes.cardMediaMusic} ${classes.musicImage2}`}/>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                <Card className={classes.card}>
                        <CardMedia className={`${classes.cardMediaMusic} ${classes.musicImage3}`}/>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} align="center">
                <Card className={classes.card}>
                        <CardMedia className={`${classes.cardMediaMusic} ${classes.musicImage4}`}/>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Music