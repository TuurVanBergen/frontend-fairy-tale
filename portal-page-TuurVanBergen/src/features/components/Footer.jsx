import "./Footer.css";
import Logo from "../../assets/logo2.svg";
function Footer() {
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
						<a href="#">Sprookjes</a>
					</li>
					<li>
						<a href="#">Making Of</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
