import React, {useEffect, useState} from "react";
import {Button, CardActions, Typography} from "@material-ui/core";
import useStyles from "../../styles";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import pdf from "../../images/12 сентября.pdf";


function Performances() {
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 768); //786 - это стандартная ширина мобильного браузера.

    function mobileRender() {
        return (
            <Grid container spacing={3} className={classes.backgroundPerformance2}>
                <Grid item xs={12}>
                    <Typography variant="h3" color="primary" align='center' gutterBottom>
                        {translationMap.get('performancesHeader')}
                    </Typography>
                    <Typography  variant="h3" color="primary" align='center' gutterBottom>
                        {translationMap.get('performancesHeader1')}
                    </Typography>
                </Grid>
                <Grid item xs={12} justifyContent="center">
                    <CardActions className={classes.download}>
                        <Button  size="large" variant="contained" color="primary" href={pdf}>
                            {translationMap.get('download2')}
                        </Button>
                    </CardActions>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="primary" align='center' gutterBottom>
                            {translationMap.get('performancesHeader2')}
                        </Typography>
                    </Grid>
                    <Typography
                        variant="h5"
                        color="primary"
                        paragraph
                    >
                        <p>{translationMap.get('performancesEktenia1')}</p>
                        <p>{translationMap.get('performancesFirstAntifon')}</p>
                        <p>{translationMap.get('performancesSecondAntifon')}</p>
                        <p>{translationMap.get('performancesEdinorodni')}</p>
                        <p>{translationMap.get('performancesVoZarstvii')}</p>
                        <p>{translationMap.get('performancesPriidite')}</p>
                        <p>{translationMap.get('performancesTrisvaytoe')}</p>
                        <p>{translationMap.get('performancesGreat')}</p>
                        <p>{translationMap.get('performancesHeruvim')}</p>
                        <p>{translationMap.get('performancesEktenia')}</p>
                        <p>{translationMap.get('performancesMilost')}</p>
                        <p>{translationMap.get('performancesDostoino')}</p>
                        <p>{translationMap.get('performancesVidehom')}</p>
                    </Typography>
                </Grid>
            </Grid>
        )

    }

    function browserRender() {
        return (
            <Grid container spacing={3} className={`${classes.backgroundPerformance} ${classes.mainFeaturesPost}`}>
                <Grid item xs={12}>
                    <Typography variant="h3" color="primary" align='center' gutterBottom>
                        {translationMap.get('performancesHeader')}
                    </Typography>
                    <Typography  variant="h3" color="primary" align='center' gutterBottom>
                        {translationMap.get('performancesHeader1')}
                    </Typography>
                </Grid>
                <Grid item xs={12} justifyContent="center">
                    <CardActions className={classes.download}>
                        <Button  size="large" variant="contained" color="primary" href={pdf}>
                            {translationMap.get('download2')}
                        </Button>
                    </CardActions>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.mainFeaturesPostContent}>
                        <Grid item xs={12}>
                            <Typography variant="h5" color="primary" align='center' gutterBottom>
                                {translationMap.get('performancesHeader2')}
                            </Typography>
                        </Grid>
                        <Typography
                            variant="h5"
                            color="primary"
                            paragraph
                        >
                            <p>{translationMap.get('performancesEktenia1')}</p>
                            <p>{translationMap.get('performancesFirstAntifon')}</p>
                            <p>{translationMap.get('performancesSecondAntifon')}</p>
                            <p>{translationMap.get('performancesEdinorodni')}</p>
                            <p>{translationMap.get('performancesVoZarstvii')}</p>
                            <p>{translationMap.get('performancesPriidite')}</p>
                            <p>{translationMap.get('performancesTrisvaytoe')}</p>
                            <p>{translationMap.get('performancesGreat')}</p>
                            <p>{translationMap.get('performancesHeruvim')}</p>
                            <p>{translationMap.get('performancesEktenia')}</p>
                            <p>{translationMap.get('performancesMilost')}</p>
                            <p>{translationMap.get('performancesDostoino')}</p>
                            <p>{translationMap.get('performancesVidehom')}</p>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        )
    }


    return (

        <>
            {isMobile ? mobileRender() : browserRender()}
        </>
    )
}


export default Performances