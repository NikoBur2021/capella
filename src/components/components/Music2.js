import Grid from "@material-ui/core/Grid";
import {Button, Card, CardMedia, Container} from "@material-ui/core";
import useStyles from "../../styles";
import React from "react";

function Music2(){
    const classes = useStyles()
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Card className={classes.card}>
                            <CardMedia className={`${classes.cardMediaMusic} ${classes.blago1}`}/>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card className={classes.card}>
                            <CardMedia className={`${classes.cardMediaMusic} ${classes.blago2}`}/>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Music2