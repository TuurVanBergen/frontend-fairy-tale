import Navigation from "./core/components/Navigation.jsx";
import Footer from "./features/components/Footer.jsx";
import FilterMenu from "./features/components/FilterMenu.jsx";
import FairyTales from "./features/components/FairyTales.jsx";
import "../src/App.css";
import { RouterProvider } from "react-router-dom";
import router from "./core/utils/router.jsx";

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
