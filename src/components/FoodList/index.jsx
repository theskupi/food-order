import React, { useEffect, useState } from "react"
import FoodItem from "./FoodItem"
import "./FoodList.scss"

function FoodList() {
	const [foodData, setFoodData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [httpError, setHttpError] = useState(null)

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				`${
					// @ts-ignore
					import.meta.env.VITE_FIREBASE_ID
				}`
			)
			if (!response.ok) {
				throw new Error(response.statusText)
			}

			const responseData = await response.json()

			setFoodData(responseData)
			setIsLoading(false)
		}

		fetchMeals().catch((error) => {
			setHttpError(error.message)
			setIsLoading(false)
		})
	}, [])

	if (httpError) {
		return <div className="meals-error">{httpError}</div>
	}

	return (
		<div className="food-list">
			{isLoading ? (
				<div>Loading...</div>
			) : (
				foodData.map((itemData) => (
					<FoodItem data={itemData} key={itemData.id} />
				))
			)}
		</div>
	)
}

export default FoodList
