import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div>
				<NavBar />
			</div>
			<div>
				<ItemListContainer />
			</div>
		</div>
	);
}

export default App;
