import { React, useEffect, useState } from "react";

//compoenentes
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ match }) => {
	let productId = match.params.id;

	const [data, setData] = useState({});

	useEffect(() => {
		setTimeout(() => {
			fetch(`https://fakestoreapi.com/products/${productId}`)
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setData(data);
				});
		}, 2000);
	}, [productId]);

	return (
		<div className="ItemDetail">
			<ItemDetail dataProduct={data} />
		</div>
	);
};

export default ItemDetailContainer;
