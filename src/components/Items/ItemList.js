import React, { useState, useEffect } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const itemPromise = new Promise((res) => {
	setTimeout(() => {
		res([
			{
				id: 1,
				title: "Agujas 9M",
				description: "Agujas Magnum 9",
				price: 15,
				pictureURL: "https://www.dhresource.com/albu_223857147_00/1.0x0.jpg",
			},
			{
				id: 2,
				title: "Agujas 9L",
				description: "Agujas Liner 9",
				price: 20,
				pictureURL:
					"https://customtattoosupplies.com/wp-content/uploads/aguja-clasica-1-300x300.jpg",
			},
			{
				id: 3,
				title: "Tips 9M",
				description: "Tips para Magnum 9",
				price: 5,
				pictureURL:
					"https://www.vegatattoosupplies.com/3409-home_default/9rm-agujas-t-tech-2-generacion.jpg",
			},
			{
				id: 4,
				title: "tips 9L",
				description: "Tips para Liner 9",
				price: 5,
				pictureURL:
					"https://www.vegatattoosupplies.com/2041-home_default/3rl-ez-revolution-linea-20unid.jpg",
			},
			{
				id: 5,
				title: "Tinta Dynamic",
				description: "Tinta negra 1oz.",
				price: 1400,
				pictureURL:
					"https://m.media-amazon.com/images/I/51huQ4i3ELL._AC_SS450_.jpg",
			},
		]);
	}, 2000);
});

const ItemList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		itemPromise.then((res) => setItems(res));
	}, []);

	return (
		<div className="Items">
			{items.map((item) => {
				return <ItemListContainer key={item.id} array={item} />;
			})}
		</div>
	);
};

export default ItemList;
