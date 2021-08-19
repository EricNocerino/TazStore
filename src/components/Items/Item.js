import React from "react";
import { Card, Image } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";

let stock = 15;

function Añadir(stockItems) {
	stockItems > stock
		? alert("no tenemos stock suficiente")
		: alert("Añadido al carrito");
}

const Item = ({ product }) => (
	<Card style={{ height: 540, margin: 20 }}>
		<Image src={product.image} style={{ height: 250, margin: 20 }} />
		<Card.Content>
			<Card.Header>{product.title}</Card.Header>
			<Card.Meta>
				<span className="category">{product.category}</span>
			</Card.Meta>
			<Card.Description>${product.price}</Card.Description>
			<Card.Content extra>
				<ItemCount stock={stock} initial={1} onAdd={Añadir} />
			</Card.Content>
		</Card.Content>
	</Card>
);

export default Item;
