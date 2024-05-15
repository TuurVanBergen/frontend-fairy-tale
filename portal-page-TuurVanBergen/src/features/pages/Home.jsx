import Footer from "../../features/components/Footer.jsx";
import FilterMenu from "../../features/components/FilterMenu.jsx";
import FairyTales from "../../features/components/FairyTales.jsx";
import "./Home.css";

import React, { useState } from "react";

function App() {
	const [filter, setFilter] = useState("");

	return (
		<>
			<section>
				<FilterMenu setFilter={setFilter} />
				<FairyTales filter={filter} />
			</section>
			<Footer />
		</>
	);
}

export default App;
