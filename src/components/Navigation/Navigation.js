import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

//componentes
import CartWidget from "../Cartwidget/CartWidget";

const Navigation = () => {
	return (
		<div className="Navigation">
			<ul>
				<Link to="/">Inicio</Link>
				<Link to="/category/men's%20clothing">Hombre</Link>
				<Link to="/category/women's%20clothing">Mujer</Link>
				<Link to="/category/jewelery">Joyería</Link>
				<Link to="/category/electronics">Electronica</Link>
				<Link to="/CartWidget">
					<CartWidget />
				</Link>
			</ul>
		</div>
	);
};

export default Navigation;
