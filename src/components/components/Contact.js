import useStyles from "../../styles";
import {Breadcrumbs, Container, Grid, Typography} from "@material-ui/core";
import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Contact(){
    const translationMap = useSelector(state => state.translation.translationMap)
    const classes = useStyles()
    function handleClick() {
    }
  return (
      <div className={classes.backgroundContact}>
          <Container maxWidth="xl">
              <Grid item>
                  <Typography className={classes.contactUs} variant="h1" align="left" color="secondary" gutterBottom>
                      {translationMap.get('contactUs')}
                  </Typography>
              </Grid>
              <Grid item>
                  <Typography className={classes.contactUss} variant="h6" align="right" color="secondary" gutterBottom>
                      <div className={classes.donateAll}>{translationMap.get('forInformation1')}</div>
                      <div className={classes.donateAll}>{translationMap.get('forInformation2')}</div>
                      <div className={classes.donateAll}>{translationMap.get('forInformation3')}</div>
                  </Typography>
              </Grid>
          </Container>
      </div>
  )
}
export default Contact