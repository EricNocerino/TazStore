import React from "react";
import "./App.css";

//Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

const App = () => {
	return (
		<div className="App">
			<div>
				<NavBar />
			</div>
			<div>
				<ItemListContainer />
			</div>
			<div>
				<ItemDetailContainer />
			</div>
		</div>
	);
};

export default App;
