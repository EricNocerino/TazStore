import React, { Component } from 'react';
import './App.css';


import "./components/NavBar/NavBar";
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'



class App extends Component {
    render () {
        return(
            
            <div className="App">
               
                <NavBar />
                <div className='Items-Conteiner'>
                    <ItemListConteiner
						name= 'Agujas 9M'
						date='Aguja Magnum 9M'
						img='data:image/jpeg;base64,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'
                        
					/> 
                   
			    </div>
            </div>
            
           
            
        )

    }




}

export default App;

