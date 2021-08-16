import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CardWidget = (props) => {
	return (
		<>
			<a>
				<FontAwesomeIcon icon={faShoppingCart} />
				{props.cantidad}
			</a>
		</>
	);
};

export default CardWidget;
