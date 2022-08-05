// @ts-nocheck
import React, { useRef } from "react"
import { useState } from "react"

const isEmpty = (value) => value.trim() === ""
const isFiveChars = (value) => value.trim().length === 5

export const Checkout = ({ onClose, submitOrderHandler }) => {
	const [formIsValid, setFormIsValid] = useState({
		name: true,
		street: true,
		postal: true,
		city: true
	})
	const nameInputRef = useRef()
	const streetInputRef = useRef()
	const postalInputRef = useRef()
	const cityInputRef = useRef()

	const confirmFormHandler = (e) => {
		e.preventDefault()
		const userData = {
			enteredName: nameInputRef.current.value,
			enteredStreet: streetInputRef.current.value,
			enteredPostal: postalInputRef.current.value,
			enteredCity: cityInputRef.current.value
		}

		const enteredNameIsValid = !isEmpty(userData.enteredName)
		const enteredStreetIsValid = !isEmpty(userData.enteredStreet)
		const enteredPostalIsValid = isFiveChars(userData.enteredPostal)
		const enteredCityIsValid = !isEmpty(userData.enteredCity)

		const formIsValid =
			enteredNameIsValid &&
			enteredStreetIsValid &&
			enteredPostalIsValid &&
			enteredCityIsValid

		setFormIsValid({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			postal: enteredPostalIsValid,
			city: enteredCityIsValid
    })
    
    if (!formIsValid) {
			return
		}

		submitOrderHandler(userData)
	}
	return (
		<form onSubmit={confirmFormHandler} className="checkout-form">
			<div className={`form-control ${!formIsValid.name ? "invalid" : ""}`}>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formIsValid.name && <p>Please enter valid name!</p>}
			</div>
			<div className={`form-control ${!formIsValid.street ? "invalid" : ""}`}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formIsValid.street && <p>Please enter valid street!</p>}
			</div>
			<div className={`form-control ${!formIsValid.postal ? "invalid" : ""}`}>
				<label htmlFor="postal">Postal code</label>
				<input type="text" id="postal" ref={postalInputRef} />
				{!formIsValid.postal && <p>Please enter valid postal code!</p>}
			</div>
			<div className={`form-control ${!formIsValid.city ? "invalid" : ""}`}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formIsValid.city && <p>Please enter valid city!</p>}
			</div>
			<div className="cart-modal__control">
				<button onClick={onClose}>Cancel</button>
				<button type="submit">Confirm</button>
			</div>
		</form>
	)
}
