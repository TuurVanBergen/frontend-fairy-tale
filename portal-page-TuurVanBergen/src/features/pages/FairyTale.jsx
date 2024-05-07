import "./FairyTale.css";
import Footer from "../components/Footer.jsx";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Sprookje() {
	return (
		<div className="flex">
			<Parallax pages={565455} style={{ top: "160px", left: "0" }}>
				<ParallaxLayer offset={0} speed={0.1}>
					<div className="animation-layer" id="parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.2}>
					<div className="animation-layer" id="parallax-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.3}>
					<div className="animation-layer" id="parallax-03"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.4}>
					<div className="animation-layer" id="parallax-04"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.5}>
					<div className="animation-layer" id="parallax-05"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.6}>
					<div className="animation-layer" id="parallax-06"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.7}>
					<div className="animation-layer" id="parallax-07"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.8}>
					<div className="animation-layer" id="parallax-08"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.9}>
					<div className="animation-layer" id="parallax-09"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={1}>
					<div className="animation-layer" id="parallax-10"></div>
					<div className="fix"></div>
				</ParallaxLayer>
			</Parallax>
			<Footer />
		</div>
	);
}

export default Sprookje;
