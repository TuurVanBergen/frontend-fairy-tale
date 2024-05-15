import "./Footer.css";
import Logo from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import React from "react";
function Footer() {
	const base = "/frontend-courseproject-TuurVanBergen/";
	return (
		<footer id="pageBottom">
			<div className="LogoFooter">
				<img src={Logo} alt="" />
			</div>
			<div className="AboutUs">
				<h2>About Us</h2>
				<p>
					"Er Was Eens" is een website waar studenten hun eigen sprookjes maken.
					Deze verhalen worden tot leven gebracht met parallax-effecten,
					waardoor de lezers een meeslepende ervaring beleven terwijl ze door
					het verhaal scrollen. Het is een betoverende plek waar traditionele
					sprookjes een moderne twist krijgen en waar iedereen kan genieten van
					de magie van het vertellen. Welkom in ons sprookjesrijk!
				</p>
			</div>
			<div className="FooterNavigation">
				<ul>
					<li>
						<Link to={base}>Sprookjes</Link>
					</li>
					<li>
						<Link to={base + "makingOf"}>Making Of</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
