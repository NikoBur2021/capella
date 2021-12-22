import logo from "../../images/button-PayPal-donate.png";
import useStyles from "../../styles";
import Grid from "@material-ui/core/Grid";
import {Button,Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";




function Donate(){
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

    let isMobile = (width <= 768) ;

    function mobileRender(){
        return(
            <Grid container xs={12} className={classes.backgroundDonate}>
                <Grid item xs={12}>
                    <Typography variant="h3" align="center" color="primary" gutterBottom >
                        {translationMap.get('donateMakeAdon')}
                    </Typography>
                    <Typography variant="h6" align="center" color="primary"  >
                        {translationMap.get('donateAlldona')}
                    </Typography>
                    <Typography variant="h6" align="center" color="primary" >
                        {translationMap.get('donateSoThat')}
                    </Typography>
                    <Typography variant="h6" align="center" color="primary"  >
                        {translationMap.get('donateAllperfor')}
                    </Typography>
                    <Typography variant="h6" align="center" color="primary"  >
                        {translationMap.get('donateThank')}
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                        <form action="https://www.paypal.com/donate" method="post" target="_blank">
                            <input type="hidden" name="business" value="nikodimburyakov@gmail.com" />
                            <input type="hidden" name="no_recurring" value="0" />
                            <input type="hidden" name="item_name" value="Donate" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="image" src={logo} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                </Grid>
            </Grid>
        )
    }
    function browserRender(){
        return(
            <Grid container spacing={3}  className={classes.backgroundDonate}>
                <Grid item xs={12}>
                    <Typography className={classes.donateMake} color="primary" >
                        {translationMap.get('donateMakeAdon')}
                    </Typography>
                    <Typography className={`${classes.noPad2} ${classes.donateAll}`} color="primary"  >
                        {translationMap.get('donateAlldona')}
                    </Typography>
                    <Typography className={`${classes.noPad2} ${classes.donateAll}`} color="primary" >
                        {translationMap.get('donateSoThat')}
                    </Typography>
                    <Typography className={`${classes.noPad2} ${classes.donateAll}`} color="primary"  >
                        {translationMap.get('donateAllperfor')}
                    </Typography>
                    <Typography className={`${classes.noPad2} ${classes.donateAll}`} color="primary"  >
                        {translationMap.get('donateThank')}
                    </Typography>
                </Grid>

                <Grid item xs={12} align="center">
                    <Button>
                        <form action="https://www.paypal.com/donate" method="post" target="_blank">
                            <input type="hidden" name="business" value="nikodimburyakov@gmail.com" />
                            <input type="hidden" name="no_recurring" value="0" />
                            <input type="hidden" name="item_name" value="Donate" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="image" src={logo} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </Button>
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
export default Donate
