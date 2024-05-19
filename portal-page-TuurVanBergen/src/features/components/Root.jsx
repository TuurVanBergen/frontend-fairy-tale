import React, { useState } from "react";
import N from "../../core/components/Navigation.jsx";
import { Outlet } from "react-router-dom";
import "./Root.css";
import DATA from "../../assets/FairyTales.json";

//https://www.openai.com/ used ChatGPT for error solving
//https://www.youtube.com/watch?v=A4nrUgKw4kY

//HTML / JSX for the Root component
function Root() {
	//UseState to manage setSearchTerm
	//It return searchTerm and the function setSearchTerm to update the state
	const [searchTerm, setSearchTerm] = useState("");

	//This filters the fairytales based on the search term
	//it iterates over the full json file (DATA) and checks if the searchTerm matches the name of the fairytale
	const filteredFairyTales = DATA.filter((fairyTale) =>
		fairyTale.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="Root">
			<N setSearchTerm={setSearchTerm} />
			<Outlet context={{ searchTerm, filteredFairyTales }} />
		</div>
	);
}

export default Root;
