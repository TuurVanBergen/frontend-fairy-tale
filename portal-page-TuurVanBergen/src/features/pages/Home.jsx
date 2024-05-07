import Footer from "../../features/components/Footer.jsx";
import FilterMenu from "../../features/components/FilterMenu.jsx";
import FairyTales from "../../features/components/FairyTales.jsx";
import "./Home.css";
function App() {
	return (
		<>
			<section>
				<FilterMenu />
				<FairyTales />
			</section>
			<Footer />
		</>
	);
}

export default App;
