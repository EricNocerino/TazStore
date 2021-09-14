import { React, useState, useEffect } from "react";
import ItemList from "../Items/ItemList";

import { collection, query, getDocs } from "firebase/firestore";

//firebase
import { db } from "../../firebase";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	console.log(products);
	const getProducts = async () => {
		const docs = [];
		const q = query(collection(db, "products"));

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setProducts(docs);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="productList-container">
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
