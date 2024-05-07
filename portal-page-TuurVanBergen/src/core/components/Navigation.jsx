import logo from "../../assets/logo.svg";
import "./Navigation.css";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
	return (
		<nav>
			<div className="Logo">
				<img src={logo} alt="" />
			</div>
			<div className="SearchBar">
				<input
					className="inputSearch"
					type="search"
					name=""
					id=""
					placeholder="Zoek hier naar een topic"
				/>
			</div>
			<div className="Navigation">
				<ul>
					<li>
						<a href="#pageBottom">About Us</a>
					</li>
					<li>
						<Link to="/">Sprookjes</Link>
					</li>
					<li>
						<Link to="/makingOf">Making Of</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
