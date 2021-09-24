import logo from "../../images/button-PayPal-donate.png";
import useStyles from "../../styles";
import Grid from "@material-ui/core/Grid";
import {Breadcrumbs, Button, Container, Link, Typography} from "@material-ui/core";
import React from "react";
import {useSelector} from "react-redux";




function Donate(){
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    function handleClick() {
    }
  return (
      <Container>

          <div className={classes.overlay}/>
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
      </Container>

  )
}
export default Donate
