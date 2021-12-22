import {Button, Typography} from "@material-ui/core";
import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    return (
        <footer>
            <Grid container>
                <Grid item xs={12} className={classes.footer}>
                    <Typography variant='h5' align="center" gutterBottom>
                        <div className={classes.noPad1}>{translationMap.get('footerSpirit')}</div>
                        <div className={classes.noPad1}>{translationMap.get('footerWhere')}</div>
                        <div className={classes.FooterFont}>{translationMap.get('footerPlease')}</div>
                        <Button rel="noopener noreferrer" href="https://www.instagram.com/nikodim.capella/"
                                target="_blank"
                                to='/'>
                            <InstagramIcon className={classes.instaSize}/>
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer