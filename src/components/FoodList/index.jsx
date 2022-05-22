import React from "react"
import FoodItem from "./FoodItem"
import "./FoodList.scss"
import mealsData from "../../../data/meals.json"

function FoodList() {
	// const [foodData, setFoodData] = useState(null)

	// useEffect(() => {
	// 	fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
	// 		.then((res) => res.json())
	// 		.then((data) => setFoodData(data.meals))
	// }, [])

	const { meals } = mealsData

	return (
		<div className="food-list">
			{meals &&
				meals.map((itemData) => <FoodItem data={itemData} key={itemData.id} />)}
		</div>
	)
}

export default FoodList
