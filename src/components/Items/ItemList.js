import React from "react";
import Item from "../Items/Item";
import "./ItemList.css";

import { Link } from "react-router-dom";

const ItemList = (props) => {
	return (
		<div className="Item">
			{props.products.map((product) => {
				return (
					<Link className="items" to={`/detail/${product.id}`}>
						<Item product={product} key={product.id} />
					</Link>
				);
			})}
		</div>
	);
};

export default ItemList;
