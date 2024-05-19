import React from "react";
import "./FilterMenu.css";
import image1 from "../../assets/ethics (2).svg";
import image2 from "../../assets/frog (2).svg";
import image3 from "../../assets/Icon metro-magic-wand.svg";
import image4 from "../../assets/paper (2).svg";
import image5 from "../../assets/sword (2).svg";

// HTML / JSX for the FilterMenu.
function FilterMenu({ setFilter }) {
	return (
		<div className="FilterMenu">
			<div
				className="FilterOption"
				// updates the filter with the category "Magie en Betovering"
				onClick={() => setFilter("Magie en Betovering")}
			>
				<img src={image3} alt="Magie en Betovering" />
				<a href="#">Magie en Betovering</a>
			</div>
			<div
				className="FilterOption"
				// updates the filter with the category "Queesten en reizen"
				onClick={() => setFilter("Queesten en reizen")}
			>
				<img src={image4} alt="Queesten en reizen" />
				<a href="#">Queesten en reizen</a>
			</div>
			<div
				className="FilterOption"
				// updates the filter with the category "Moraliteit en lessen"
				onClick={() => setFilter("Moraliteit en lessen")}
			>
				<img src={image1} alt="Moraliteit en lessen" />
				<a href="#">Moraliteit en lessen</a>
			</div>
			<div
				className="FilterOption"
				// updates the filter with the category "Dierenverhalen"
				onClick={() => setFilter("Dierenverhalen")}
			>
				<img src={image2} alt="Dierenverhalen" />
				<a href="#">Dierenverhalen</a>
			</div>
			<div
				className="FilterOption"
				// updates the filter with the category "Trucs en Slimme helden"
				onClick={() => setFilter("Trucs en Slimme helden")}
			>
				<img src={image5} alt="Trucs en Slimme helden" />
				<a href="#">Trucs en Slimme helden</a>
			</div>
		</div>
	);
}

export default FilterMenu;
