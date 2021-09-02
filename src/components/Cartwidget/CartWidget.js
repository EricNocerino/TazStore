import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../CartContext/CartContext";

export const CartWidget = () => {
	const { cart } = useCartContext();

	const totalItems = cart.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);

	return (
		<p>
			<FontAwesomeIcon icon={faShoppingCart} />
			{totalItems}
		</p>
	);
};

export default CartWidget;
