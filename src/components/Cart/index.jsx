import React, { useContext, useEffect, useState } from "react"
import CartContext from "../../helpers/cart-context"
import "./Cart.scss"

function Cart({ modalHandler }) {
	const [btnAnimation, setBtnAnimation] = useState(false)
	const ctxData = useContext(CartContext)
	const { items } = ctxData

	const countCartItems = items.reduce((current, item) => {
		return current + item.amount
	}, 0)

	useEffect(() => {
		if (items.length === 0) {
			return
		}
		setBtnAnimation(true)

		const timer = setTimeout(() => {
			setBtnAnimation(false)
		}, 300)

		return () => {
			clearTimeout(timer)
		}
	}, [items])

	return (
		<div>
			<button
				className={`cart-button ${btnAnimation ? "bump" : ""}`}
				onClick={modalHandler}
			>
				🛒 Your Cart <span className="counter">{countCartItems}</span>
			</button>
		</div>
	)
}

export default Cart
