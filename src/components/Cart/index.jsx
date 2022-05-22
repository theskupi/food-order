import React, { useContext } from "react"
import CartContext from "../../helpers/cart-context"
import "./Cart.scss"

function Cart({ modalHandler }) {
	const contextData = useContext(CartContext)

	return (
		<div>
			<button className="cart-button" onClick={modalHandler}>
				🛒 Your Cart <span className="counter">{contextData.totalAmount}</span>
			</button>
		</div>
	)
}

export default Cart
