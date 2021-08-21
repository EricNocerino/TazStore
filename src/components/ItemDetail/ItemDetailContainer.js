import { React, useEffect, useState } from "react";
import axios from "axios";

//compoenentes
import ItemDetail from "./ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	console.log("que hay aca", data);

	useEffect(() => {
		axios("https://fakestoreapi.com/products/1").then((res) =>
			setData(res.data)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="ItemDetail">
			{isLoading ? <Spinner /> : <ItemDetail dataProduct={data} />}
		</div>
	);
};

export default ItemDetailContainer;
