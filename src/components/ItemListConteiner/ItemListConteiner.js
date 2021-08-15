import React from 'react';
import { Card, Image, Icon} from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListConteiner = ({ name, img, date }) => (
	<Card style={{ height: 420, margin: 20 }}>
		<Image src={img} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{name}</Card.Header>
			<Card.Meta>
				<span className='date'>{date}</span>
			</Card.Meta>
            <Card.Content extra>
            </Card.Content>
            <ItemCount />
            
		</Card.Content>
	</Card>
);

export default ItemListConteiner;