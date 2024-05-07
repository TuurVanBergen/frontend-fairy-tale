import "./FilterMenu.css";
import image1 from "../../assets/ethics (2).svg";
import image2 from "../../assets/frog (2).svg";
import image3 from "../../assets/Icon metro-magic-wand.svg";
import image4 from "../../assets/paper (2).svg";
import image5 from "../../assets/sword (2).svg";
function FilterMenu() {
	return (
		<div className="FilterMenu">
			<div className="FilterOption">
				<img src={image3} alt="" />
				<a href="#">Magie en Betovering</a>
			</div>
			<div className="FilterOption">
				<img src={image4} alt="" />
				<a href="#">Queesten en reizen</a>
			</div>
			<div className="FilterOption">
				<img src={image1} alt="" />
				<a href="#">Moraliteit en lessen</a>
			</div>
			<div className="FilterOption">
				<img src={image2} alt="" />
				<a href="#">Dierenverhalen</a>
			</div>
			<div className="FilterOption">
				<img src={image5} alt="" />
				<a href="#">Trucs en Slimme helden</a>
			</div>
		</div>
	);
}

export default FilterMenu;
