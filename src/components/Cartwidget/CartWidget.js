import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = (props) => {
	return (
		<p>
			<FontAwesomeIcon icon={faShoppingCart} />
			{props.cantidad}
		</p>
	);
};

export default CartWidget;
