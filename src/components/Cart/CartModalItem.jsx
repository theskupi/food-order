import React from "react"
import Button from "../Button"
import "./Cart.scss"

export default function CartModalItem({ data, onAdd, onRemove }) {
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
				<Button text={"-"} onClick={onRemove} />
				<Button text={"+"} onClick={onAdd} />
			</div>
		</div>
	)
}
