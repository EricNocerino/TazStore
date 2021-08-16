import React from "react";
import { Card, Image } from "semantic-ui-react";

const ItemListContainer = ({ name, img, date }) => (
	<Card style={{ height: 420, margin: 20 }}>
		<Image src={img} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{name}</Card.Header>
			<Card.Meta>
				<span className="date">{date}</span>
			</Card.Meta>
			<Card.Content extra></Card.Content>
		</Card.Content>
	</Card>
);

export default ItemListContainer;
