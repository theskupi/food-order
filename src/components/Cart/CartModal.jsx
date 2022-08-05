import React, { useContext } from "react"
import { createPortal } from "react-dom"
import "./Cart.scss"
import CartContext from "../../helpers/cart-context"
import Button from "../Button"
import CartModalItem from "./CartModalItem"
import { Checkout } from "./CheckoutForm"
import { useState } from "react"

const BackDrop = ({ onClick }) => {
	return <div className="backdrop" onClick={onClick} />
}

const ModalOverlay = ({ hideModal }) => {
	const [showOrderForm, setShowOrderForm] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [didSubmit, setDidSubmit] = useState(false)
	const ctxData = useContext(CartContext)
	const hasItems = ctxData.items.length > 0

	const totalPrice = ctxData.totalAmount

	const cartItemRemoveHandler = (id) => {
		ctxData.removeItem(id)
	}
	const cartItemAddHandler = (item) => {
		ctxData.addItem({ ...item, amount: 1 })
	}
	const orderHandler = () => {
		setShowOrderForm((prev) => !prev)
	}
	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true)
		await fetch(
			"https://console.firebase.google.com/project/food-order-app-fe4cd/database/food-order-app-fe4cd-default-rtdb/data/~2F/orders.json",
			{
				method: "POST",
				body: JSON.stringify({
					userData: userData,
					orderedFood: ctxData.items
				})
			}
		)
		setIsSubmitting(false)
		setDidSubmit(true)
		ctxData.clearCart()
	}

	const cartModalContent = (
		<>
			<div className="cart-modal__list">
				{ctxData.items.map((item) => {
					return (
						<CartModalItem
							key={item.id}
							data={item}
							onRemove={cartItemRemoveHandler.bind(null, item.id)}
							onAdd={cartItemAddHandler.bind(null, item)}
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

			{showOrderForm && (
				<Checkout onClose={hideModal} submitOrderHandler={submitOrderHandler} />
			)}

			{!showOrderForm && (
				<div className="cart-modal__control">
					<Button onClick={hideModal} text="Close" />
					{hasItems && <Button onClick={orderHandler} text="Order" />}
				</div>
			)}
		</>
	)

	const sendingOrderDataNotice = <p>Sending order data...</p>
	const didSubmitNotice = (
		<div>
			<p>Order sent correctly...</p>
			<div className="cart-modal__control">
				<Button onClick={hideModal} text="Close" />
			</div>
		</div>
	)

	return (
		<div className="cart-modal">
			<>
				{!isSubmitting && !didSubmit && cartModalContent}
				{isSubmitting && sendingOrderDataNotice}
				{didSubmit && !isSubmitting && didSubmitNotice}
			</>
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
