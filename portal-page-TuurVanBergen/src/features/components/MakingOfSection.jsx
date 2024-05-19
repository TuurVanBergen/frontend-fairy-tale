import "./MakingOfSection.css";
import image from "../../assets/MakingOf4.png";
import image1 from "../../assets/MakingOf1.png";
import image3 from "../../assets/MakingOf3.png";

//Sources used:
//https://www.w3schools.com/tags/tag_iframe.ASP#:~:text=Definition%20and%20Usage,%3E%20(see%20example%20below).

//HTML / JSX for the MakingOfSection component
function MakingOfSection() {
	return (
		<div className="MakingOf">
			<h1>Making of</h1>
			<div className="container">
				<div className="Thumbnail">
					<img src={image} alt="" />
					<div className="info">
						<h1>The Twelve Brothers</h1>
						<h4>By Tuur Van Bergen</h4>
					</div>
				</div>
				<div className="Descriptionn">
					<div className="video">
						{/* Iframe: https://www.w3schools.com/tags/tag_iframe.ASP#:~:text=Definition%20and%20Usage,%3E%20(see%20example%20below).*/}
						<iframe src="https://vimeo.com/520851183" allowFullScreen></iframe>
					</div>
					<div className="desc">
						<h2>Description</h2>
						<p>
							Deze website maakt gebruik van verschillende parallax-effecten de
							sprookjes tot leven te brengen.
							<br /> <br />
							1. Standaard Parallax: Bij het scrollen bewegen verschillende
							elementen met verschillende snelheden, wat een diepte-effect
							creëert. Verder scrollen laat bepaalde elementen inzoomen en
							verdwijnen, terwijl andere duidelijker worden.
							<br /> <br />
							2. Muisparallax: Beweeg je muis over de pagina en zie hoe de lagen
							van de illustraties reageren, waardoor je controle hebt over de
							snelheid van het verhaal.
							<br /> <br />
							3. CSS-animaties: Deze zorgen voor vloeiende visuele effecten en
							maken de tekst interactiever. Teksten bewegen subtiel en reageren
							dynamisch op de acties van de gebruiker, waardoor de leeservaring
							levendiger wordt.
						</p>
					</div>
				</div>
				<div className="ExtraFootage">
					<h2>Extra beeldmateriaal</h2>
					<img src={image1} alt="" />
					<img src={image3} alt="" />
				</div>
			</div>
		</div>
	);
}

export default MakingOfSection;
