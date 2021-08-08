import React from 'react';
import './ItemListConteiner.css';

const ItemListConteiner = ({h1, h2}) =>{
    return(
        <div className='ItemListConteiner'>
            <h1>{h1}</h1>
            <h2>{h2}</h2>

        </div>
    )
}
export default ItemListConteiner;