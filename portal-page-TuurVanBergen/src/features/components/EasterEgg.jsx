import React, { useState } from "react";
import "./EasterEgg.css";
function EasterEgg() {
	const [hovered, setHovered] = useState(false);

	// Event handler for mouse enter
	const handleMouseEnter = () => {
		setHovered(true);
	};

	// Event handler for mouse leave
	const handleMouseLeave = () => {
		setHovered(false);
	};

	let className = "easter-egg-container";
	if (hovered) {
		className += " hovered";
	}

	return (
		<>
			<div
				className={className}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{hovered ? (
					<div className="easter-egg">You found the Easter Egg!🥳 </div>
				) : (
					<div className="section">Hover over me🙄</div>
				)}
			</div>
		</>
	);
}

export default EasterEgg;
