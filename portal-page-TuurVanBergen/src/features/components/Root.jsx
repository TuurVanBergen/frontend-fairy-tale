import N from "../../core/components/Navigation.jsx";
import { Outlet } from "react-router-dom";
import "./Root.css";

function Root() {
	return (
		<>
			<div className="Root">
				<N />
				{/* setting up child routes */}
			</div>
			<Outlet />
		</>
	);
}

export default Root;
