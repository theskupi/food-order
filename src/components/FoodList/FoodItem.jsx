import Button from "../Button"
import React, { useState } from "react"

function FoodItem({ data, price }) {
	const [amount, setAmount] = useState(1)

	const amountHandler = (e) => {
		setAmount(e.target.value)
		console.log(amount)
	}

	const handleAddToCart = () => {
		console.log(`adding item to cart`)
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
						name=""
						id=""
						value={amount}
						onChange={amountHandler}
					/>
				</div>
				<Button onClick={{ handleAddToCart }} text="+ Add" />
			</div>
		</div>
	)
}

export default FoodItem
