import "./FairyTale.css";
import Footer from "../components/Footer.jsx";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "../components/TextBlock.jsx";
import img1 from "../../assets/2.png";
import img2 from "../../assets/2.2.png";
import img3 from "../../assets/2.3.png";
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";

// https://github.com/choozn/react-parallax-mouse?tab=readme-ov-file#readme
function Sprookje() {
	return (
		<>
			{/* layer 1 - Default Parallax */}
			<Parallax pages={18} style={{ top: "120px", left: "0" }}>
				<ParallaxLayer offset={0} speed={0.1}>
					<div className="animation-layer" id="parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.125}>
					<div className="animation-layer" id="parallax-01-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.15}>
					<div className="animation-layer" id="parallax-01-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.175}>
					<div className="animation-layer" id="parallax-01-03"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0}>
					<TextBlock />
				</ParallaxLayer>

				{/* Layer 2 - Mouse Move Parallax */}
				<ParallaxLayer offset={2}>
					<MouseParallaxContainer
						globalFactorX={0.1}
						globalFactorY={0.1}
						className="parallax-container"
					>
						<MouseParallaxChild
							className="parallax-child"
							style={{ zIndex: 1 }}
						>
							<img src={img1} alt="Layer 1" />
						</MouseParallaxChild>
						<MouseParallaxChild
							factorX={0.5}
							factorY={0.6}
							className="parallax-child"
							style={{ zIndex: 2 }}
						>
							<img src={img2} alt="Layer 2" />
						</MouseParallaxChild>
						<MouseParallaxChild
							factorX={0.7}
							factorY={0.8}
							className="parallax-child"
							style={{ zIndex: 2 }}
						>
							<img src={img3} alt="Layer 2" />
						</MouseParallaxChild>
					</MouseParallaxContainer>
				</ParallaxLayer>

				<ParallaxLayer offset={3}>
					<TextBlock />
				</ParallaxLayer>

				{/* Layer 3 - Default Parallax */}

				<ParallaxLayer offset={4} speed={0.1}>
					<div className="animation-layer" id="parallax-03"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.2}>
					<div className="animation-layer" id="parallax-03-06"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.3}>
					<div className="animation-layer" id="parallax-03-05"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.4}>
					<div className="animation-layer" id="parallax-03-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.5}>
					<div className="animation-layer" id="parallax-03-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.6}>
					<div className="animation-layer" id="parallax-03-03"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.7}>
					<div className="animation-layer" id="parallax-03-04"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={5} speed={0}>
					<TextBlock />
				</ParallaxLayer>

				{/* layer 4 */}

				<ParallaxLayer offset={6}>
					<MouseParallaxContainer
						globalFactorX={0.1}
						globalFactorY={0.1}
						className="parallax-container"
					>
						<MouseParallaxChild
							className="parallax-child"
							style={{ zIndex: 1 }}
						>
							<div className="animation-layer" id="parallax-04"></div>
						</MouseParallaxChild>
						<MouseParallaxChild
							factorX={0.5}
							factorY={0.6}
							className="parallax-child"
							style={{ zIndex: 2 }}
						>
							<div className="animation-layer" id="parallax-04-01"></div>
						</MouseParallaxChild>
					</MouseParallaxContainer>
				</ParallaxLayer>
				<ParallaxLayer offset={7} speed={0}>
					<TextBlock style="top:200px" />
				</ParallaxLayer>

				{/* layer 5*/}
				<ParallaxLayer offset={8} speed={0.1} horizontal={true}>
					<div className="animation-layer" id="parallax-05-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8} speed={0.15} horizontal={true}>
					<div className="animation-layer" id="parallax-05"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={9} speed={0.2}>
					<TextBlock style="top:200px" />
				</ParallaxLayer>

				{/* layer 7*/}
				<ParallaxLayer offset={10} speed={0.1}>
					<div className="animation-layer" id="parallax-07-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={10} speed={0.3}>
					<div className="animation-layer" id="parallax-07"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={11}>
					<TextBlock />
				</ParallaxLayer>

				{/* layer 8*/}
				<ParallaxLayer offset={12} speed={0.1}>
					<div className="animation-layer" id="parallax-08-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={12} speed={0.2}>
					<div className="animation-layer" id="parallax-08-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={12} speed={0.3}>
					<div className="animation-layer" id="parallax-08"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={13} speed={0.4}>
					<TextBlock />
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default Sprookje;
