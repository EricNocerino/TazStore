import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ product }) => (
	<Card className="card">
		<Image src={product.image} className="image" />
		<Card.Content>
			<Card.Header>{product.title}</Card.Header>
			<Card.Meta>
				<span className="category">{product.category}</span>
			</Card.Meta>
			<Card.Description>${product.price}</Card.Description>
			<Card.Content extra>
				<a>Mas Detalles >>></a>
			</Card.Content>
		</Card.Content>
	</Card>
);

export default Item;
