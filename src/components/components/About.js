import YouTube from "../YouTube";
import {
    Breadcrumbs,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
    Link
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles";
import {useSelector} from "react-redux";

function About(){
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    function handleClick() {
    }
  return (
      <div>
          <div className={classes.container}>
              <Container maxWidth="lg" >
                  <Typography variant="h3" align="center" color="textSecondary" gutterBottom>
                      {translationMap.get('aboutHomeBtn')}
                  </Typography>
                      <Grid container spacing={4} justify="center">
                          <Grid item>
                              <YouTube videoId={'7dOTcxZdiH4'}/>
                          </Grid>
                          <Grid item>
                              <YouTube videoId={'_QmW0X1-FPQ'}/>
                          </Grid>
                      </Grid>
              </Container>
              <Container className={classes.cardGrid} maxWidth="lg">
                  <Grid container spacing={4}>
                          <Grid item md={3}>
                              <Card className={classes.card}>
                                  <CardMedia className={`${classes.cardMedia} ${classes.aboutImages1}`}/>
                                  <CardContent className={classes.cardContent} >
                                      <Typography gutterBottom variant="h5">
                                          {translationMap.get('aboutSPRING')}
                                      </Typography>
                                      <Typography>
                                          {translationMap.get('aboutFirstPer')}
                                      </Typography>
                                  </CardContent>
                              </Card>
                          </Grid>
                      <Grid item md={3}>
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
                      <Grid item md={3}>
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
                      <Grid item md={3}>
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
              </Container>
          </div>
      </div>
  )
}
export default About