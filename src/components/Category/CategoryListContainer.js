import React, { useState, useEffect } from "react";
import Item from "../Items/Item";
import { Link } from "react-router-dom";

const CategoryListContainer = ({ match }) => {
	const categoryId = match.params.id;
	console.log(categoryId);

	const [category, setCategory] = useState([]);
	useEffect(() => {
		setTimeout(() => {
			fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setCategory(data);
				});
		}, 0);
	}, [categoryId]);

	return (
		<div>
			<h1>{categoryId}</h1>
			{category.map((e) => {
				return (
					<Link className="items" to={`/detail/${e.id}`}>
						<Item key={e.id} product={e} />
					</Link>
				);
			})}
		</div>
	);
};

export default CategoryListContainer;
