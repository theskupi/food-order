import React, { useContext } from "react"
import CartContext from "../../helpers/cart-context"
import "./Cart.scss"

function Cart({ modalHandler }) {
	const contextData = useContext(CartContext)

	const countCartItems = contextData.items.reduce((current, item) => {
		return current + item.amount
	}, 0)

	return (
		<div>
			<button className="cart-button" onClick={modalHandler}>
				🛒 Your Cart <span className="counter">{countCartItems}</span>
			</button>
		</div>
	)
}

export default Cart
