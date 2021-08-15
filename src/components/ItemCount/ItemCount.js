import {React, useState, useEffect} from "react";
import { Button, Icon } from 'semantic-ui-react';



const ItemCount = ({ initial=1, stock=15, onAdd }) => {
    const [stockItems, setStockItems] = useState(initial);
    
  
    const handleIncrement = () => {
      
    if (stockItems < stock){
        setStockItems(stockItems + 1)
    }else {
        return false
        
    }
      
    };
  
    const handleDecrement = () => {
        if (stockItems > 1){
            setStockItems(stockItems -1)
        }else {
            return false;
        }

    };


      

  return (
    <div className="ItemCount">
        <a>
            <Icon name='slack' />
            En stock: {stock}
        </a>
        <p>Cantidad: {stockItems}</p>
        <Button secondary onClick={handleDecrement}>-</Button>
        <Button primary onClick={handleIncrement}>+</Button>
        <Button animated='vertical'>
            <Button.Content hidden>Añadir {stockItems}</Button.Content>
            <Button.Content visible>
            <Icon name='shop' />
            </Button.Content>
        </Button>
      
    </div>
  );
};

export default ItemCount;