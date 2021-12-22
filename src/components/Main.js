import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Performances from "./components/Performances";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import {
  Switch,
  Route
} from "react-router-dom";
import Music from "./components/Music";
import Video from "./components/Video";
import Music1 from "./components/Music1";
import Music2 from "./components/Music2";
import Music3 from "./components/Music3";
import Sever from "./components/Sever";
import {Container} from "@material-ui/core";






function Main(){
  return (
      <main>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/performances">
              <Performances />
            </Route>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/music">
              <Music/>
            </Route>
            <Route path="/music1">
              <Music1/>
            </Route>
            <Route path="/music2">
              <Music2/>
            </Route>
            <Route path="/music3">
              <Music3/>
            </Route>
            <Route path="/video">
              <Video/>
            </Route>
            <Route path="/sever">
              <Sever/>
            </Route>
          </Switch>
        </Container>
      </main>
  )
}
export default Main