import React, { Component }  from 'react';

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Productlist from "./components/produclist/Productlist";


const App = () => {
    return <div>
        <Intro/>
        <About/>
        <Productlist/>
        <Contact/>
    </div>
  };
  
  export default App;