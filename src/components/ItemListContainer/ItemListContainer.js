import React from "react";
import { Card, Image } from "semantic-ui-react";

const ItemListContainer = ({ array }) => (
	<Card style={{ height: 420, margin: 20 }}>
		<Image src={array.pictureURL} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{array.title}</Card.Header>
			<Card.Meta>
				<span className="description">{array.description}</span>
			</Card.Meta>
			<Card.Content extra>Precio: ${array.price}</Card.Content>
		</Card.Content>
	</Card>
);

export default ItemListContainer;
