import React, { useState } from "react";
import "./FairyTales.css";
import FairyTale from "./FairyTale.jsx";
import { useOutletContext } from "react-router-dom";

//Sources used:
//https://reactrouter.com/en/6.23.1/hooks/use-outlet-context
//https://www.openai.com/ used ChatGPT for error solving
//https://www.youtube.com/watch?v=A4nrUgKw4kY

//FairyTales Component
function FairyTales({ filter }) {
	//Gets the filteredFairyTales out of the context of a parent route
	const { filteredFairyTales } = useOutletContext();

	//manage the number of visible items, initially set to 3
	const [visibleCount, setVisibleCount] = useState(3);

	//toggle the amount of visible items
	const toggleView = () => {
		//if the visibleCount is equal to 3, then show all the items
		if (visibleCount == 3) {
			setVisibleCount(filteredFairyTales.length);
		} else {
			//if the visibleCount is not equal to 3, then show only 3 items
			setVisibleCount(3);
		}
	};

	// if the visibleCount is equal to 3, then the text inside the button is changed to "Load More"
	function changeButtonText() {
		if (visibleCount == 3) {
			return "Load More";
		} else {
			//else, then the text inside the button is changed to "Load More"
			return "Load Less";
		}
	}

	//filters the items based on genre
	const filteredFairyTale = filteredFairyTales.filter(
		(item) => filter == "" || item.genre == filter
	);
	//

	return (
		<div className="FairyTales">
			<div className="title">
				<h1>Populair</h1>
			</div>
			{/* determines the number of filteredFairyTales to be displayed */}
			{/* Map function iterates over the filteredFairyTales and passes them to the FairyTale component */}
			{filteredFairyTale.slice(0, visibleCount).map((item) => (
				<FairyTale
					key={item.key}
					name={item.name}
					age={item.title}
					link={item.link}
					img={item.img}
				/>
			))}
			{/* If the button is clicked then the toggle function is called */}
			<div className="button">
				<button onClick={toggleView} className="toggle-button">
					{/* calling the function that changes the text insde the button*/}
					{changeButtonText()}
				</button>
			</div>
		</div>
	);
}

export default FairyTales;
