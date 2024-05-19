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
