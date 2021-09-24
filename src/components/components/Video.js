import {Button, Container, Grid, Typography} from "@material-ui/core";
import YouTube from "../YouTube";
import React from "react";
import {useSelector} from "react-redux";
import useStyles from "../../styles";
import {Link} from "react-router-dom";

function Video(){
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    return (
        <div className={classes.container}>
            <Container maxWidth="lg" >
                <Container>
                    <div className={classes.button}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" component={Link} to="/sever">
                                    {translationMap.get('sever')}
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                <Typography variant="h3" align="center" color="textSecondary" gutterBottom>
                    {translationMap.get('aboutHomeBtn')}
                </Typography>

                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <YouTube videoId={'cTWeVuW-8AQ'}/>
                    </Grid>
                    <Grid item>
                        <YouTube videoId={'uVi9qB8VP7M'}/>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <YouTube videoId={'B0ALJ6yEsr8'}/>
                    </Grid>
                    <Grid item>
                        <YouTube videoId={'dd9wR8OzmXQ'}/>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <YouTube videoId={'s2v6i7RG2IY'}/>
                    </Grid>
                    <Grid item>
                        <YouTube videoId={'6Fz-OHxbUZo'}/>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <YouTube videoId={'YTB8uNdyUvo'}/>
                    </Grid>
                    <Grid item>
                        <YouTube videoId={'oMCnqrDrXdQ'}/>
                    </Grid>
                </Grid>


            </Container>
        </div>
    )
}
export default Video