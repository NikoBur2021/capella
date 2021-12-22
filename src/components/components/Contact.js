import useStyles from "../../styles";
import {Grid, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";


function Contact(){
    const translationMap = useSelector(state => state.translation.translationMap)
    const classes = useStyles()
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

    let isMobile = (width <= 768) ;
    function mobileRender(){
        return (
            <Grid container spacing={3} className={classes.backgroundContact2} >
                <Grid item xs={12}>
                    <Typography  variant="h2" align="center" color="secondary" gutterBottom>
                        {translationMap.get('contactUs')}
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography className={classes.contactUss2}  variant="h5" align="center" color="secondary"  >
                        <div>{translationMap.get('forInformation1')}</div>
                        <div>{translationMap.get('forInformation2')}</div>
                        <div>{translationMap.get('forInformation3')}</div>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
    function browserRender(){
        return(
            <Grid container spacing={3} className={classes.backgroundContact} xs={12}>
                <Grid item xs={12}>
                    <Typography className={classes.contactUs} variant="h1" align="left" color="secondary" gutterBottom>
                        {translationMap.get('contactUs')}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.contactUss} variant="h6" align="right" color="secondary" gutterBottom>
                        <div className={classes.donateAll}>{translationMap.get('forInformation1')}</div>
                        <div className={classes.donateAll}>{translationMap.get('forInformation2')}</div>
                        <div className={classes.donateAll}>{translationMap.get('forInformation3')}</div>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
  return (
      <>
          {isMobile ? mobileRender(): browserRender()}
      </>
  )
}
export default Contact