import React, { Component }  from 'react';

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Productlist from "./components/produclist/Productlist";
import Toggle from './components/toggle/Toggle';

import { useContext } from 'react';
import { ThemeContext } from './context';

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return <div
        style={{
            backgroundColor: darkMode? "black" : "white",
            color: darkMode && "white",
        }}
        >
        <Toggle/>
        <Intro/>
        <About/>
        <Productlist/>
        <Contact/>
    </div>
  };
  
  export default App;