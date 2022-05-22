import Cart from "../Cart"
import React from "react"
import "./Navigation.scss"

function Navigation({ modalHandler }) {
	return (
		<div className="navigation-wrapper">
			<div className="navigation-container">
				<h1>ReactMeals</h1>
				<Cart modalHandler={modalHandler} />
			</div>
		</div>
	)
}

export default Navigation
