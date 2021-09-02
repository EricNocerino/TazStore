import React, { useState } from "react";
import { Item, Card, Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";

const ItemDetail = ({ dataProduct }) => {
	const [stockItems, setStockItems] = useState(null);

	let stock = 15;
	if (stockItems > stock) {
		alert("No hay suficiente Stock");
	}

	const { addToCart } = useCartContext();

	const onAdd = (valor) => {
		valor > 0 ? setStockItems(valor) : alert("Agregar un item por favor.");
		addToCart(dataProduct, valor);
	};

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
						<ItemCount stock={stock} initial={1} onAdd={onAdd} />
						<>
							<Link to="/cart">
								<Button>Ir al carrito</Button>
							</Link>

							<Link to="/">
								<Button>Volver menú principal</Button>
							</Link>
						</>
					</Item.Content>
				</Item>
			</Item.Group>
		</Card>
	);
};

export default ItemDetail;
