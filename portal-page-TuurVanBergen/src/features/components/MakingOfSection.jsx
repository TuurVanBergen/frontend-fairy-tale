import "./MakingOfSection.css";
import image from "../../assets/Mask Group 12.png";
import image1 from "../../assets/Mask Group 10.png";
import image2 from "../../assets/Mask Group 11.png";
import image3 from "../../assets/Mask Group 9.png";

function MakingOfSection() {
	return (
		<div className="MakingOf">
			<div className="Thumbnail">
				<img src={image} alt="" />
			</div>
			<div className="Descriptionn">
				<div className="video">
					<iframe
						src="https://www.youtube.com/watch?v=4qxgwN9aq8E&list=PLHeL0JWdJLvTuGCyC3qvx0RM39YvopVQN&index=2"
						allowFullScreen
					></iframe>
				</div>
				<div className="description">
					<p>
						Op onze website maken we gebruik van verschillende parallax-effecten
						om onze sprookjes tot leven te brengen: 1. Standaard parallax bij
						introductie: Als je begint te scrollen, beweegt de toren en de
						struik met verschillende snelheden, waardoor een gevoel van diepte
						ontstaat. Naarmate je verder scrolt, zoomt de struik in en
						verdwijnt, terwijl de toren duidelijker wordt weergegeven. 2. Mouse
						parallax voor het begin van het verhaal: Beweeg je muis over de
						scroll, en je krijgt het volledige scroll te zien, samen met het
						begin van het verhaal. Dit geeft de lezer controle over de snelheid
						van het verhaal. 3. Multi parallax voor de beweging van de toren en
						de heks: Na het scrollen beweegt de toren naar rechts en zoomt in,
						terwijl een multi parallax-effect wordt geactiveerd. Hierin zie je
						de heks horizontaal verschuiven. Als je op de knop naast de heks
						drukt, zal het haar van Raponsje verticaal naar beneden dalen.
					</p>
				</div>
			</div>
			<div className="ExtraFootage">
				<img src={image1} alt="" />
				<img src={image2} alt="" />
				<img src={image3} alt="" />
			</div>
			<p>hallo</p>
		</div>
	);
}

export default MakingOfSection;
