import './App.css';
import * as React from 'react';
import {
    BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import Footer from "./components/Footer";
import {ThemeProvider} from "@material-ui/styles";
import {Button, CssBaseline, ListItemIcon} from "@material-ui/core";

import useStyles from "./styles";
import Main from "./components/Main";
import {useSelector} from "react-redux";
import Welcome from "./components/Welcome";
import customTheme from "./components/Theme";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import {useEffect, useState} from "react";
import Header from "./components/Header";



const drawerWidth = 240;


const MainStyle = styled('main', {shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: customTheme.palette.primary.main,
    color:customTheme.palette.text.primary,
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles()
    // const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const translationMap = useSelector(state => state.translation.translationMap)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



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

    let isMobile = (width <= 768);

    function mobileRender (){
        return (
            <>
            <AppBar position="fixed" open={open} >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Menu
                        {width}
                        {isMobile?'mobile': 'browser'}
                    </Typography>
                    <BrowserView>
                        <h1>This is rendered only in browser</h1>
                    </BrowserView>
                    <MobileView>
                        <h1>This is rendered only on mobile</h1>
                    </MobileView>
                </Toolbar>
            </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {customTheme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary={translationMap.get('homeHeaderBtn')}/>
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemText>
                        <ListItemText primary={translationMap.get('aboutHeaderBtn')}/>
                    </ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/performances" >
                    <ListItemText primary={translationMap.get('performancesHeaderBtn')}/>
                </ListItem>
                <ListItem button component={Link} to="/donate" >
                    <ListItemText primary={translationMap.get('donateHeaderBtn')}/>
                </ListItem>
                <ListItem button component={Link} to="/contact" >
                    <ListItemText primary={translationMap.get('contactHeaderBtn')}/>
                </ListItem>
                <div>
                    <Welcome/>
                </div>
            </List>
        </Drawer>
        <MainStyle open={open}>
            <Main/>
            <Footer/>
        </MainStyle>
            </>
        )
    }
    function browserRender(){
        return(
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }

    return(
        <Box sx={{ display: 'flex' }}>
            <ThemeProvider theme={customTheme}>
                <CssBaseline/>
                <Router>
                    {isMobile ? mobileRender(): browserRender()}
                </Router>
            </ThemeProvider>
        </Box>
    );
}


