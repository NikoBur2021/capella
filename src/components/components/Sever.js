import {Breadcrumbs, Container, Grid, Typography,Link} from "@material-ui/core";
import YouTube from "../YouTube";
import React from "react";
import {useSelector} from "react-redux";
import useStyles from "../../styles";


function Sever(){
    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    function handleClick() {

    }
    return (
        <div className={classes.container}>
            <div className={classes.bread}>
                <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                     {translationMap.get('homeHeaderBtn')}
                </Link>
                <Link color="inherit" href="/video" onClick={handleClick}>
                    {translationMap.get('seeMyVideos')}
                </Link>
                <Typography color="textPrimary">{translationMap.get('sever')}</Typography>
            </Breadcrumbs>
            </div>
            <Container maxWidth="lg" >
                    <Typography variant="h3" align="center" color="textSecondary" gutterBottom>{translationMap.get('sever')}</Typography>
                    <Typography variant="h3" align="center" color="textSecondary" gutterBottom>{translationMap.get('sever1')}</Typography>
                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <YouTube videoId={'Wy1R9wFEj6Q'}/>
                    </Grid>
                    <Grid item>
                        <YouTube videoId={'ovgm9YmvXiQ'}/>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <YouTube videoId={'BNY3L-irXO0'}/>
                    </Grid>
                    <Grid item>
                        <YouTube videoId={'YTB8uNdyUvo'}/>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <YouTube videoId={'YTB8uNdyUvo'}/>
                    </Grid>
                    <Grid item>
                        <YouTube videoId={'q6qzyLYSby0'}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Sever