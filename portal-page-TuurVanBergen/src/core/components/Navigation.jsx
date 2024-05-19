import React from "react";
import logo from "../../assets/logo.svg";
import "./Navigation.css";
import { Link } from "react-router-dom";

// HTML / JSX for navigation.
// setSearchTerm, a parameter used for updating the search term
function Navigation({ setSearchTerm }) {
	// Defining the base url
	const base = "/frontend-courseproject-TuurVanBergen";

	return (
		<nav>
			<div className="Logo">
				{/* "Link" Enables navigation between different components */}
				<Link to={base + "/"}>
					<img src={logo} alt="" />
				</Link>
			</div>

			<div className="SearchBar">
				{/* functionality SearchBar, if the user types something, the state will update*/}
				<input
					className="inputSearch"
					type="text"
					placeholder="Zoek hier naar een topic"
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
			</div>
			<div className="Navigation">
				<ul>
					<li>
						<a href="#pageBottom">About Us</a>
					</li>
					<li>
						{/* "Link" Enables navigation between different components */}
						<Link to={base + "/"}>Sprookjes</Link>
					</li>
					<li>
						<Link to={base + "/makingOf"}>Making Of</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
