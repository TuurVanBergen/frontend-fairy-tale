import React from "react";
import logo from "../../assets/logo.svg";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ setSearchTerm }) {
	const base = "/frontend-courseproject-TuurVanBergen";
	return (
		<nav>
			<div className="Logo">
				<Link to={base + "/"}>
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="SearchBar">
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
