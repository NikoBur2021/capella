import React from "react";
import './App.css';
import {
    CssBaseline,
} from '@material-ui/core';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./components/Theme";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";


function App() {
    return (
        <Provider store={store}>
        <ThemeProvider theme={theme}>
        <Router>
                <CssBaseline/>
                <Header/>
                <Main/>
                <Footer/>
        </Router>
        </ThemeProvider>
        </Provider>
    );
}

export default App;

