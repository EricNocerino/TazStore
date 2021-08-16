import React, { Component } from "react";
import "./App.css";

import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Item from "./components/Items/Item";

function App() {
	let stock = 15;

	function Añadir(stockItems) {
		stockItems > stock
			? alert("no tenemos stock suficiente")
			: alert("Añadido al carrito");
	}

	return (
		<div className="App">
			<NavBar />
			<div className="Items-Container">
				<ItemListContainer />
				<ItemCount stock={stock} initial={1} onAdd={Añadir} />
			</div>
		</div>
	);
}

export default App;
