import React from "react";
import "./NavBar.css";
import { CardWidget } from "../Cartwidget/CartWidget";
import logo from "./LogoTaz.png";

export const NavBar = () => {
	return (
		<nav className="NavBar">
			<ul>
				<li>
					<img src={logo} alt="logo" width="40px" text-align="left" />{" "}
				</li>
				<li>
					<a>Productos</a>
				</li>
				<li>
					<a>Insumos</a>
				</li>
				<li>
					<a>diseños</a>
				</li>
				<li>
					<a>Contacto</a>
				</li>
				<li>
					<a>Quienes Somos</a>
				</li>
				<li>
					<CardWidget cantidad={0} />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
