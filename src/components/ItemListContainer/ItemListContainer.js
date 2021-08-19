import { React, useState, useEffect } from "react";
import ItemList from "../Items/ItemList";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com//products?limit=5")
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setProducts(data);
			});
	}, []);
	return <ItemList products={products} />;
};

export default ItemListContainer;
