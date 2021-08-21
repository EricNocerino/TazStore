import React from "react";
import { Item } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";

let stock = 15;

function Añadir(stockItems) {
	stockItems > stock
		? alert("no tenemos stock suficiente")
		: alert("Añadido al carrito");
}

const ItemDetail = ({ dataProduct }) => {
	return (
		<Item.Group>
			<Item>
				<Item.Content>
					<Item.Header>{dataProduct.title}</Item.Header>
					<Item.Meta>
						<span className="price">{dataProduct.price}</span>
						<span className="stay">{dataProduct.category}</span>
					</Item.Meta>
					<Item.Description>{dataProduct.description}</Item.Description>
					<Item.Image size="medium" src={dataProduct.image} />
					<ItemCount stock={stock} initial={1} onAdd={Añadir} />
				</Item.Content>
			</Item>
		</Item.Group>
	);
};

export default ItemDetail;
