import Footer from "../components/Footer.jsx";
import FilterMenu from "../components/FilterMenu.jsx";
import "../../App.css";
import MakingOfSection from "../components/MakingOfSection.jsx";
function App() {
	return (
		<>
			<section>
				<FilterMenu />
				<MakingOfSection />
			</section>
			<Footer />
		</>
	);
}

export default App;
