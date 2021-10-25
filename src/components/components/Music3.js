import Grid from "@material-ui/core/Grid";
import {Button, Card, CardMedia, Container} from "@material-ui/core";
import useStyles from "../../styles";
import React from "react";
import pdf from "../../images/Valyaev.pdf";

function Music3(){
    const classes = useStyles()
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary"  href={pdf} >
                            Click to download
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Card className={classes.card}>
                            <CardMedia className={`${classes.cardMediaMusic} ${classes.valyaev1}`}/>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card className={classes.card}>
                            <CardMedia className={`${classes.cardMediaMusic} ${classes.valyaev2}`}/>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card className={classes.card}>
                            <CardMedia className={`${classes.cardMediaMusic} ${classes.valyaev3}`}/>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Music3