import Button from "../Button"
import React from "react"
import { createPortal } from "react-dom"
import "./Cart.scss"

const BackDrop = ({ onClick }) => {
	return <div className="backdrop" onClick={onClick} />
}

const ModalOverlay = ({ hideModal }) => {
	return (
		<div className="cart-modal">
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
