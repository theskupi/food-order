import React, { useState } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import FoodList from "./components/FoodList"
import CartModal from "./components/Cart/CartModal"
import "./App.scss"
import CartProvider from "./helpers/CartProvider.jsx"

function App() {
	const [openModal, setOpenModal] = useState(false)

	const showCartHandler = () => {
		setOpenModal(true)
	}

	const hideCartHandler = () => {
		setOpenModal(false)
	}

	return (
		<div className="App">
			<CartProvider>
				<Navigation modalHandler={showCartHandler} />
				<CartModal openModal={openModal} hideModal={hideCartHandler} />
				<div className="img-wrapper">
					<img src="../images/bg.jpg" alt="" />
				</div>
				<div className="container">
					<Hero />
					<FoodList />
				</div>
			</CartProvider>
		</div>
	)
}

export default App
