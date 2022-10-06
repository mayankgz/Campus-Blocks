import Team from "./modules/Teams";
import WebFont from 'webfontloader';
import {useEffect} from 'react';
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/core'
import './App.css';

import Contact from './modules/Contact'
import Team2 from "./modules/Team2";
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
      <Team2/>
     <Contact />
    </div>
  );
}

export default App;
