// import N from "../../core/components/Navigation.jsx";
// import { Outlet } from "react-router-dom";
// import "./Root.css";

// import DATA from "../../assets/FairyTales.json";
// import React, { useState } from "react";

// function Root() {
// 	const [searchTerm, setSearchTerm] = useState("");

// 	const filteredMovies = DATA.filter((movie) =>
// 		movie.name.toLowerCase().includes(searchTerm.toLowerCase())
// 	);

// 	return (
// 		<>
// 			<div className="Root">
// 				<N setSearchTerm={setSearchTerm} />
// 			</div>
// 			<Outlet />
// 		</>
// 	);
// }

// export default Root;
import React, { useState } from "react";
import N from "../../core/components/Navigation.jsx";
import { Outlet, useOutletContext } from "react-router-dom";
import "./Root.css";
import DATA from "../../assets/FairyTales.json";

function Root() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredMovies = DATA.filter((movie) =>
		movie.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="Root">
			<N setSearchTerm={setSearchTerm} />
			<Outlet context={{ searchTerm, filteredMovies }} />
		</div>
	);
}

export default Root;
