import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ product }) => {
	return (
		<div className="content">
			<Card>
				<Image src={product.image} className="image" />
				<Card.Content className="card">
					<Card.Header className="header">{product.title}</Card.Header>
					<Card.Meta>
						<span className="category">{product.category}</span>
					</Card.Meta>
					<Card.Description>${product.price}</Card.Description>
					<Card.Content extra>
						<p>Mas Detalles >>></p>
					</Card.Content>
				</Card.Content>
			</Card>
		</div>
	);
};

export default Item;
