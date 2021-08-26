import { React, useState, useEffect } from "react";
import ItemList from "../Items/ItemList";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/")
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				setProducts(data);
			});
	}, []);

	return (
		<div className="productList-container">
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
