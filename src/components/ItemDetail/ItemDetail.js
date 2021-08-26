import React from "react";
import { Item, Card } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";

let stock = 15;

function Añadir(stockItems) {
	stockItems > stock
		? alert("no tenemos stock suficiente")
		: alert("Añadido al carrito");
}

const ItemDetail = ({ dataProduct }) => {
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
						<Item.Image size="medium" src={dataProduct.image} />
						<ItemCount stock={stock} initial={1} onAdd={Añadir} />
					</Item.Content>
				</Item>
			</Item.Group>
		</Card>
	);
};

export default ItemDetail;
