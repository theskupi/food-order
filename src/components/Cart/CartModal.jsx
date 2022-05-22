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

	const totalPrice = ctxData.items.forEach((item) => {
		// count total price
	})
	return (
		<div className="cart-modal">
			<div>
				{ctxData.items.map((item) => {
					return <CartModalItem data={item} />
				})}
			</div>
			<div>
				<strong>Total amount</strong>
				<strong>$88.99</strong>
			</div>
			<div className="cart-modal__control">
				<Button onClick={hideModal} text="Close" />
				<Button
					onClick={() => {
						console.log(`Sending order...`)
					}}
					text="Order"
				/>
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
