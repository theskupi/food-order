import Button from "../Button"
import React, { useContext, useState } from "react"
import CartContext from "../../helpers/cart-context"

function FoodItem({ data }) {
	const cartCtx = useContext(CartContext)
	const [amount, setAmount] = useState(1)

	const amountHandler = (e) => {
		setAmount(e.target.value)
	}

	const handleAddToCart = () => {
		cartCtx.addItem({
			id: data.id,
			name: data.name,
			price: data.price,
			amount: amount
		})
		console.log(cartCtx.items)
	}

	return (
		<div className="food-item">
			<div>
				<h3>{data.name}</h3>
				<p>{data.desc}</p>
				<div className="price">${data.price}</div>
			</div>
			<div className="food-item__right">
				<div>
					<strong>Amount</strong>{" "}
					<input
						type="number"
						name="food-item-input"
						id={data.id}
						value={amount}
						onChange={amountHandler}
						min={1}
						max={10}
					/>
				</div>
				<Button onClick={handleAddToCart} text="+ Add" />
			</div>
		</div>
	)
}

export default FoodItem
