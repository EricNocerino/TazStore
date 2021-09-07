import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

//import components
import CartItem from "./CartItem";
import { CartContext } from "../../components/CartContext/CartContext";
import { Button } from "semantic-ui-react";

const Cart = () => {
	const { cart, clear, totalItemsCart, totalPrice } = useContext(CartContext);

	return (
		<div>
			<h1>Tu carrito</h1>
			{totalItemsCart !== 0 ? (
				<p>Tienes {totalItemsCart} items en el Carrito</p>
			) : (
				<p>Tu carrito está vacío</p>
			)}

			<NavLink to="/">
				<Button>Volver al Menú</Button>
			</NavLink>

			<Button onClick={clear}>Limpiar</Button>
			<div>
				<div>
					<table>
						<thead>
							<tr>
								<th>Imagen</th>
								<th>Articulo</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th>Total</th>
								<th>Borrar</th>
							</tr>
						</thead>

						{cart.map((item) => {
							return <CartItem dataItem={item} key={item.id} />;
						})}
					</table>
				</div>
			</div>
			<h1>Total : ${totalPrice} </h1>
		</div>
	);
};

export default Cart;
