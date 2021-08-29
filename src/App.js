import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import CategoryListContainer from "./components/Category/CategoryListContainer";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				<Navigation />
				<Switch>
					<Route exact path="/" component={ItemListContainer} />
					<Route path="/category/:id" component={CategoryListContainer} />
					<Route path="/detail/:id" component={ItemDetailContainer} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
