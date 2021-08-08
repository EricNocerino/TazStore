import React, { Component } from 'react';
import './App.css';
import TazLogo from './components/assets/img/TazLogo.jpg';

import "./components/NavBar";
import NavBar from './components/NavBar'


class App extends Component {
    render () {
        return(
            <div className="App">
                <NavBar></NavBar>
                <img src= { TazLogo} />
                
                <h1></h1>

            </div>

        )
    }




}

export default App;

