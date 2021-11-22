import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import YouTube from "../YouTube";
import React from "react";
import useStyles from "../../styles";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import chesnokov1 from "../../images/Chesnokov1a.jpg"
import kopilov from "../../images/Kopilov 1a.jpg"
import antifon from "../../images/AntifonChes1a.jpg"
import valyaev from "../../images/valyaev1a.jpeg"
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
const cards = [
    {
        id: 1,
        bookName: 'Милость Мира',
        composer: 'Копылов',
        price: 2,
        picture: kopilov,
        music:  '/music1'

    },
    {
        id: 2,
        bookName: 'Херувимская',
        composer: 'Чесноков',
        price: 3,
        picture: chesnokov1,
        music: '/music'

    },
    {
        id: 3,
        bookName: 'Благослови, Душе',
        composer: 'Чесноков',
        price: 2,
        picture: antifon,
        music: '/music2'
    },
    {
        id: 3,
        bookName: 'Второй Антифон',
        composer: 'Валяев',
        price: 3,
        picture: valyaev,
        music: '/music3'
    },
    ]

function Home() {

    const classes = useStyles()
    const translationMap = useSelector(state => state.translation.translationMap)
    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                        {translationMap.get('hello')}
                </Typography>
                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <YouTube videoId={'b-57dt3Bqms'}/>
                    </Grid>
                    <Grid item>
                        <YouTube videoId={'bBf0UmZ-Gio'}/>
                    </Grid>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        {translationMap.get('HomePhotoAlbum')}
                    </Typography>
                </Grid>
            </Container>
            <Container>
                <div className={classes.button}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary" component={Link} to="/video">
                                {translationMap.get('seeMyVideos')}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Typography variant="h5" align="center" gutterBottom className={classes.top50}>
                {translationMap.get('HomeArranged')}
            </Typography>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={card.picture}/>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        {card.bookName}
                                    </Typography>
                                    <Typography>
                                            Композитор: {card.composer}
                                    </Typography>
                                    <Typography>
                                         {translationMap.get('homeSuggested')} ${card.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="secondary" component={Link} to={card.music}>View</Button>
                                    <Button size="small" color="secondary" component={Link} to="/donate">Donate</Button>
                                    <LayerIcon/>
                                    <PlayCircleFilledIcon/>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
export default Home