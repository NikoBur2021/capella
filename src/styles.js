import {makeStyles} from "@material-ui/core/styles";
import dr from "./images/gray.jpg";
import centralPark from "./images/centralPark.jpg"
import nick from "./images/nick.jpg"
import church from "./images/church.jpg"
import trio from "./images/trio.jpg"
import donate from "./images/donate.jpg"
import US from "./images/US.png"
import Ru from "./images/Rus.png"
import pasha from "./images/Pasha'sFriend.jpg"
import chesnokov1 from "./images/Chesnokov1.jpg"
import chesnokov2 from "./images/Chesnokov2.jpg"
import chesnokov3 from "./images/Chesnokov3.jpg"
import chesnokov4 from "./images/Chesnokov4.jpg"
import korean from "./images/KoreanTown.jpg"
import blago1 from "./images/AntifonChes1.jpg"
import blago2 from "./images/AntifonChes2.jpg"
import kopilov1 from "./images/Milost1.png"
import kopilov2 from "./images/Milost2.png"
import kopilov3 from "./images/Milost3.png"

import valyaev1 from "./images/valyaev1.jpeg"
import valyaev2 from "./images/valyaev2.jpeg"
import valyaev3 from "./images/valyaev3.jpeg"

const useStyles = makeStyles((theme) =>({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8,0,3),
    position:"relative",
  },
  us:{
    backgroundImage: `url(${US})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 15,
    width: 22
  },
  ru:{
    backgroundImage: `url(${Ru})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 15,
    width: 22
  },
  flags: {
    marginLeft: '50px',
    marginTop: '5px',
    fontSize: 15,
  },
  homePad: {
    fontSize: 30,
  },
  instaSize: {
    marginTop: '6px',
    fontSize: 60,
    '&:hover': {
      backgroundColor: 'gray',
    }
  },
  backgroundPerformance: {
    position:"relative",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)),url(${dr})`
  },
  backgroundDonate: {
    backgroundImage: `url(${donate})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  },
  backgroundContact: {
    backgroundImage: `url(${korean})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  },
  backgroundHome: {
    position:"relative",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)),url(${pasha})`
  },

  donateMake:{
    fontSize: 130,
    marginTop: '90px',
    fontWeight: 'bold',
    color: theme.palette.primary,
  },
  contactUs:{
    fontSize: 150,
    marginLeft: '155px'
  },
  contactUss:{
    fontSize: 150,
    paddingTop: '300px',
  },
  donateAll:{
    paddingTop: '2px',
    fontSize: 25,
    paddingLeft: '60px',
    fontWeight: 'bold',
  },
  currentPr:{
    paddingTop: '2px',
    fontSize: 55,
    paddingLeft: '60px',

  },
  aboutImages1: {
    backgroundImage: `url(${centralPark})`
  },
  aboutImages2: {
    backgroundImage: `url(${nick})`
  },
  aboutImages3: {
    backgroundImage: `url(${church})`
  },
  aboutImages4: {
    backgroundImage: `url(${trio})`
  },
  musicImage1: {
    backgroundImage: `url(${chesnokov1})`,
    backgroundSize:'contain',
  },
  musicImage2: {
    backgroundImage: `url(${chesnokov2})`,
    backgroundSize:'contain',
  },
  musicImage3: {
    backgroundImage: `url(${chesnokov3})`,
    backgroundSize:'contain',
  },
  musicImage4: {
    backgroundImage: `url(${chesnokov4})`,
    backgroundSize:'contain',
  },
  musicImageKop: {
    backgroundImage: `url(${kopilov1})`,
    backgroundSize:'contain',
  },
  musicImageKop2: {
    backgroundImage: `url(${kopilov2})`,
    backgroundSize:'contain',
  },
  musicImageKop3: {
    backgroundImage: `url(${kopilov3})`,
    backgroundSize:'contain',
  },
  blago1: {
    backgroundImage: `url(${blago1})`,
    backgroundSize:'contain',
  },
  blago2: {
    backgroundImage: `url(${blago2})`,
    backgroundSize:'contain',
  },
  valyaev1: {
    backgroundImage: `url(${valyaev1})`,
    backgroundSize:'contain',
  },
  valyaev2: {
    backgroundImage: `url(${valyaev2})`,
    backgroundSize:'contain',
  },
  valyaev3: {
    backgroundImage: `url(${valyaev3})`,
    backgroundSize:'contain',
  },
  FooterFont:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  noPad1:{
    margin:'0px',
  },
  noPad2:{
    margin:'0px',
  },
  count: {
    fontSize: 30
  },
  En: {
    marginLeft: '50px',
    marginTop: '10px',
    fontSize: 20,
  },
  En2: {
    marginLeft: '10px',
    marginTop: '40px',
  },
  bread: {
    marginLeft: '10px',
    marginTop: '-40px'
  },

  mR50: {
    marginRight:'60px',

  },
  top50: {
    marginTop: '65px'
  },
  sixPix: {
    marginTop: '6px',
    fontSize: 18,
    '&:hover': {
  backgroundColor: 'gray',

}
  },
  buttons: {
    marginTop: '40px'
  },
  cardGrid: {
    padding: '80px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardMediaMusic: {
    paddingTop: '100.10%',


  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0'
  },
  mainFeaturesPost: {
    position: "relative",
    color:theme.palette.common,
    marginBottom:theme.spacing,
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay:{
    position: "absolute",
    top: 0,
    bottom: -40,
    right: 0,
    left: 0,
    // background: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(9)
  },
  authorSelect: {
    minWidth: '120px'
  },
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

}))
export default useStyles;