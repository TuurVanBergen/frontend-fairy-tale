import "./FairyTale.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import img1 from "../../assets/2.png";
import img2 from "../../assets/2.2.png";
import img3 from "../../assets/2.3.png";
import logo from "../../assets/logo.svg";
import ArrowL from "../../assets/arrow-left.svg";
import ArrowR from "../../assets/arrow-right.svg";
``;
import EasterEgg from "../components/EasterEgg.jsx";
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";

// https://github.com/choozn/react-parallax-mouse?tab=readme-ov-file#readme
// parallax FairyTale Page
function Sprookje() {
	return (
		<>
			{/* layer 1 - Default Parallax */}
			<Parallax pages={19} style={{ top: "140px", left: "0" }}>
				<ParallaxLayer offset={0} speed={0.1}>
					<div className="animation-layer" id="parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.125}>
					<div className="animation-layer" id="parallax-01-01">
						<h1>The Twelve Brothers</h1>
					</div>
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
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							The King’s Order and the Queen’s Sadness
						</h1>
						<p className="fairyTaleDesc">
							The king stands in the grand throne room, giving a harsh order to
							the sad queen. He demands that if their next child is a girl,
							their twelve sons must die so the kingdom can belong to her. The
							queen, holding the key to a locked room, knows it contains twelve
							small coffins filled with shavings, symbolizing the terrible fate
							awaiting her sons.
						</p>
					</div>
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
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							Benjamin Learns the Truth
						</h1>
						<p className="fairyTaleDesc">
							In a dimly lit room, the queen weeps, her heart heavy with sorrow.
							Young Benjamin kneels beside her, asking why she is so sad. She
							finally shows him the locked room with twelve coffins. Benjamin
							comforts his mother, his determination growing as he plans to save
							his brothers from their grim fate.
						</p>
					</div>
				</ParallaxLayer>

				{/* Layer 3 - Default Parallax */}
				<ParallaxLayer offset={4} speed={0.1}>
					<div className="animation-layer" id="parallax-03"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.125}>
					<div className="animation-layer" id="parallax-03-06"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.15}>
					<div className="animation-layer" id="parallax-03-05"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.175}>
					<div className="animation-layer" id="parallax-03-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.2}>
					<div className="animation-layer" id="parallax-03-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.225}>
					<div className="animation-layer" id="parallax-03-03"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.25}>
					<div className="animation-layer" id="parallax-03-04"></div>
					<div className="fix"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={5} speed={0}>
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							The Brothers Run Away to the Forest
						</h1>
						<p className="fairyTaleDesc">
							Led by Benjamin, the twelve brothers journey deep into the dark,
							dense forest. Each carries a small bundle of belongings, prepared
							for a new life away from danger. They find an old, dilapidated hut
							surrounded by thick trees and decide to stay there. Benjamin
							remains behind to keep the house while the others go hunting for
							food.
						</p>
					</div>
				</ParallaxLayer>

				{/* layer 4 - Mouse Move Parallax */}
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
							factorX={0.3}
							factorY={0.4}
							className="parallax-child"
							style={{ zIndex: 2 }}
						>
							<div className="animation-layer" id="parallax-04-01"></div>
						</MouseParallaxChild>
					</MouseParallaxContainer>
				</ParallaxLayer>
				<ParallaxLayer offset={7} speed={0}>
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							The Queen’s Daughter Grows Up
						</h1>
						<p className="fairyTaleDesc">
							In a shadowy, moonlit royal garden, the young princess, marked by
							a golden star on her forehead, stands looking somber. She holds a
							small shirt she found, a poignant reminder of her lost brothers.
							Her mother, the queen, stands nearby with a sorrowful expression,
							sharing the tragic story of the twelve boys who disappeared before
							her birth.
						</p>
					</div>
				</ParallaxLayer>

				{/* layer 5 - Default parallax */}
				<ParallaxLayer offset={8} speed={0.1}>
					<div className="animation-layer" id="parallax-05-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8} speed={0.15}>
					<div className="animation-layer" id="parallax-05"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={9} speed={0.2}>
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							The Sister Finds Her Brothers
						</h1>
						<p className="fairyTaleDesc">
							In the heart of a vast, dark forest, the princess, worn from
							travel, approaches a small, hidden hut. Inside, by the flickering
							light of a candle, she finds Benjamin. They recognize each other
							instantly, and tears of joy fill their eyes as they embrace,
							finally reunited after so many years apart.
						</p>
					</div>
				</ParallaxLayer>

				{/* layer 6 - Default parallax */}
				<ParallaxLayer offset={10} speed={0.1}>
					<div className="animation-layer" id="parallax-06"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={10} speed={0.15}>
					<div className="animation-layer" id="parallax-06-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={10} speed={0.2}>
					<div className="animation-layer" id="parallax-06-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={10} speed={0.25}>
					<div className="animation-layer" id="parallax-06-03"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={10} speed={0.3}>
					<div className="animation-layer" id="parallax-06-04"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={11} speed={0.2}>
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							The Sister Finds Her Brothers
						</h1>
						<p className="fairyTaleDesc">
							In the heart of a vast, dark forest, the princess, worn from
							travel, approaches a small, hidden hut. Inside, by the flickering
							light of a candle, she finds Benjamin. They recognize each other
							instantly, and tears of joy fill their eyes as they embrace,
							finally reunited after so many years apart.
						</p>
					</div>
				</ParallaxLayer>

				{/* layer 7 - Mouse Move Parallax */}
				<ParallaxLayer offset={12}>
					<MouseParallaxContainer
						globalFactorX={0.1}
						globalFactorY={0.1}
						className="parallax-container"
					>
						<MouseParallaxChild
							className="parallax-child"
							style={{ zIndex: 1 }}
							factorX={0.1}
							factorY={0.1}
						>
							<div className="animation-layer" id="parallax-07-01"></div>
						</MouseParallaxChild>
						<MouseParallaxChild
							factorX={0.125}
							factorY={0.125}
							className="parallax-child"
							style={{ zIndex: 2 }}
						>
							<div className="animation-layer" id="parallax-07-02"></div>
							<MouseParallaxChild
								factorX={0.15}
								factorY={0}
								className="parallax-child"
								style={{ zIndex: 3 }}
							>
								<div className="animation-layer" id="parallax-07"></div>
							</MouseParallaxChild>
						</MouseParallaxChild>
					</MouseParallaxContainer>
				</ParallaxLayer>
				<ParallaxLayer offset={13}>
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							The Brothers Turn into Ravens
						</h1>
						<p className="fairyTaleDesc">
							Inside the dimly lit hut, the princess carefully prepares a feast.
							She holds twelve lily flowers, hoping to surprise her brothers.
							But as she plucks the flowers, an eerie transformation occurs, and
							the brothers turn into black ravens. They fly out of the hut,
							which then dissolves into shadows, leaving the princess alone in
							the dark, menacing forest.
						</p>
					</div>
				</ParallaxLayer>

				{/* layer 8 - Default Parallax */}
				<ParallaxLayer offset={14} speed={0.1}>
					<div className="animation-layer" id="parallax-08-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={14} speed={0.125}>
					<div className="animation-layer" id="parallax-08-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={14} speed={0.15}>
					<div className="animation-layer" id="parallax-08"></div>
					<div className="fix"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={15}>
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							The Princess’ Silence and Marriage
						</h1>
						<p className="fairyTaleDesc">
							High in a tree, the princess sits silently, spinning wool. A
							handsome king, hunting in the forest, discovers her and is
							enchanted by her beauty. He proposes marriage, and she nods in
							agreement. The scene shifts to their grand wedding in a majestic
							palace, where the princess, though silent and unsmiling, becomes
							queen.
						</p>
					</div>
				</ParallaxLayer>

				{/* layer 9 - Default Parallax */}
				<ParallaxLayer offset={16} speed={0.1}>
					<div className="animation-layer" id="parallax-09-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={16} speed={0.125}>
					<div className="animation-layer" id="parallax-09-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={16} speed={0.3} factorX={-1}>
					<div className="animation-layer" id="parallax-09-03"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={16} speed={0.1}>
					<div className="animation-layer" id="parallax-09-04"></div>
					<div className="fix"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={17}>
					<div className="part1">
						<h1 className="fairyTaleTitle animate-text">
							The Final Redemption
						</h1>

						<p className="fairyTaleDesc">
							In a palace courtyard, a large pyre is prepared for the silent
							queen, who is bound to the stake as flames begin to rise. The king
							watches from a window, tears in his eyes. Suddenly, twelve ravens
							appear, transforming back into her brothers. They extinguish the
							flames and free their sister. She finally speaks, explaining her
							silence. The family embraces joyfully, and the wicked stepmother
							is taken away to face her grim fate.
						</p>

						{/* Footer */}
						<div className="FairyTaleFooter">
							<a href="" id="Left">
								<img src={ArrowL} alt="" />
							</a>
							<a href="" id="Middle">
								<img src={logo} alt="" />
							</a>
							<a href="" id="Right">
								<img src={ArrowR} alt="" />
							</a>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={18}>
					<EasterEgg />
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default Sprookje;
