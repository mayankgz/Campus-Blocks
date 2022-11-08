import Team from "./modules/Teams";
import WebFont from 'webfontloader';
import {useEffect} from 'react';
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/core'
import './App.css';
import Home from './modules/home/Home';
import About from './modules/about/About'
import Navbar from './shared/Navbar'
import Uevents from './modules/upcoming event/Upcoming_event'
import CodingComp from "./modules/previous events/CodingComp";
import Roadmap from "./modules/previous events/Roadmap";
import WebOCode from "./modules/previous events/WebOCode";

import Contact from './modules/contact/Contact'
import Team2 from "./modules/Team/Team2";
function App() {
  useEffect(() => {
    WebFont.load({
        google: {
            families: ['']
        }
    });
}, []);

  return (
    <div className="App">
      <div className="fixed top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        <div>
          <Home/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Team2/>
        </div>
        <div>
          <Uevents/>
        </div>
        <div>
          <CodingComp/>
        </div>
        <div>
          <Roadmap/>
        </div>
        <div>
          <WebOCode/>
        </div>     
      <div>
        <Contact />
      </div>
     
    </div>
  );
}

export default App;
