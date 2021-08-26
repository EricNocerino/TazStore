import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

//Logo
import img from "../Header/LogoTaz.png";

const Header = () => {
	return (
		<div className="Header">
			<h1>Bienvenidos a Taz Tattoo Store</h1>
			<Link to="/">
				<img src={img} alt="logo Taz" width="160px" />
			</Link>
		</div>
	);
};

export default Header;
