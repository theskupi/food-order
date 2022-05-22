import React from "react"
import Button from "../Button"
import "./Cart.scss"

export default function CartModalItem({ data }) {
	const handleUp = () => {}
	const handleDown = () => {}

	return (
		<div className="cart-modal-item">
			<div className="cart-modal-item__info">
				<div className="name">{data.name}</div>
				<div className="numbers">
					<strong>${data.price * data.amount}</strong>
					<span>x{data.amount}</span>
				</div>
			</div>
			<div>
				<Button text={"-"} onClick={handleDown} />
				<Button text={"+"} onClick={handleUp} />
			</div>
		</div>
	)
}
