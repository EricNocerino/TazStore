import React, { Component } from 'react';
import './App.css';
import TazLogo from './components/Imagenes/TazLogo.jpg';

import "./components/NavBar/NavBar";
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'


class App extends Component {
    render () {
        return(
            <div className="App">
                <NavBar></NavBar>
                <ItemListConteiner h1='Hola Usuario' h2='Bienvenido a Taz Tattoo Store'/>
            </div>
            
        )

    }




}

export default App;

