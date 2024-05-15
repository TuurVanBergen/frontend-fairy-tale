import React, { useState } from "react";
import "./FairyTales.css";
import FairyTale from "./FairyTale.jsx";
import { useOutletContext } from "react-router-dom";

function FairyTales({ filter }) {
	const { filteredMovies } = useOutletContext();
	const [visibleCount, setVisibleCount] = useState(3);

	const toggleView = () => {
		if (visibleCount === 3) {
			setVisibleCount(filteredMovies.length);
		} else {
			setVisibleCount(3);
		}
	};

	const filteredFairyTales = filteredMovies.filter(
		(item) => filter === "" || item.genre === filter
	);

	return (
		<div className="FairyTales">
			<div className="title">
				<h1>Populair</h1>
			</div>
			{filteredFairyTales.slice(0, visibleCount).map((item) => (
				<FairyTale
					key={item.key}
					name={item.name}
					age={item.age}
					link={item.link}
				/>
			))}
			<div className="button">
				<button onClick={toggleView} className="toggle-button">
					{visibleCount === 3 ? "Load More" : "Load Less"}
				</button>
			</div>
		</div>
	);
}

export default FairyTales;
