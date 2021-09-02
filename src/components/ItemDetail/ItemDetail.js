import React, { useState } from "react";
import { Item, Card, Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

let stock = 15;

const ItemDetail = ({ dataProduct }) => {

	const [stockItems, setStockItems] = useState(null)

	const onAdd = (valor) => {
		valor > 0 ? setStockItems(valor) : alert ("Agregar un item por favor.")
	}

	return (
		<Card style={{ height: 730, width: 400, margin: 20 }}>
			<Item.Group style={{ margin: 20 }}>
				<Item>
					<Item.Content>
						<Item.Header>
							<h1>{dataProduct.title}</h1>
						</Item.Header>
						<Item.Meta>
							<span className="stay">{dataProduct.category}</span>
							<p className="price">${dataProduct.price}</p>
						</Item.Meta>
						<Item.Description>{dataProduct.description}</Item.Description>
						<Item.Image size="medium" src={dataProduct.image} />{" "}
						{stockItems === null ? <ItemCount stock={stock} initial={0} onAdd={onAdd} /> :
						<Link to="/CartWidget">
							<Button>Comprar</Button>
						</Link> 
						}
					</Item.Content>
				</Item>
			</Item.Group>
		</Card>
	);
};

export default ItemDetail;
