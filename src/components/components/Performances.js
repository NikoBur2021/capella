// import YouTube from "../YouTube";
import React from "react";
import {Container, Paper, Typography} from "@material-ui/core";
import useStyles from "../../styles";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";


function Performances(){
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
  return (

          <Paper className={`${classes.container} ${classes.backgroundPerformance} ${classes.mainFeaturesPost}`}>
              <Container fixed>
                  <div className={classes.overlay}/>
                  <Grid container>
                      <Grid item ={12}>
                          <div className={classes.mainFeaturesPostContent}>
                              <Typography component="h1" variant="h1" color="primary" gutterBottom>
                                  {translationMap.get('performancesProgram')}
                              </Typography>
                              <Typography component="h1" variant="h3" color="primary" gutterBottom>
                                  {translationMap.get('performancesHeader')}
                              </Typography>
                              <Typography component="h1" variant="h3" color="primary" gutterBottom>
                                  {translationMap.get('performancesHeader1')}
                              </Typography>
                              <Typography
                                  variant="h5"
                                  color="primary"
                                  paragraph
                              >
                                  <p>{translationMap.get('performancesEktenia')} </p>
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
              </Container>
          </Paper>
  )
}






export default Performances