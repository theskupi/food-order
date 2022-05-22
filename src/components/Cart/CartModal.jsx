import Button from "../Button"
import React, { useContext } from "react"
import { createPortal } from "react-dom"
import "./Cart.scss"
import CartContext from "../../helpers/cart-context"
import CartModalItem from "./CartModalItem"

const BackDrop = ({ onClick }) => {
	return <div className="backdrop" onClick={onClick} />
}

const ModalOverlay = ({ hideModal }) => {
	const ctxData = useContext(CartContext)
	const hasItems = ctxData.items.length > 0

	const totalPrice = ctxData.totalAmount

	const cartItemAddHandler = (item) => {
		ctxData.addItem(item)
	}
	const cartItemRemoveHandler = (item) => {
		console.log(`removing data`)
		ctxData.removeItem(item)
	}

	return (
		<div className="cart-modal">
			<div className="cart-modal__list">
				{ctxData.items.map((item) => {
					return (
						<CartModalItem
							data={item}
							key={item.id}
							onAdd={cartItemAddHandler.bind(null, item.id)}
							onRemove={cartItemRemoveHandler.bind(null, item.id)}
						/>
					)
				})}
			</div>
			<div className="cart-modal__total">
				{hasItems ? (
					<>
						<strong>Total amount</strong>
						<strong>${totalPrice}</strong>
					</>
				) : (
					<p>I'm so empty.</p>
				)}
			</div>
			<div className="cart-modal__control">
				<Button onClick={hideModal} text="Close" />
				{hasItems && (
					<Button
						onClick={() => {
							console.log(`Sending order...`)
						}}
						text="Order"
					/>
				)}
			</div>
		</div>
	)
}

const CartModal = ({ hideModal, openModal }) => {
	return (
		<>
			{openModal &&
				createPortal(
					<BackDrop onClick={hideModal} />,
					document.getElementById("overlay-root")
				)}
			{openModal &&
				createPortal(
					<ModalOverlay hideModal={hideModal} />,
					document.getElementById("modal-root")
				)}
		</>
	)
}

export default CartModal
