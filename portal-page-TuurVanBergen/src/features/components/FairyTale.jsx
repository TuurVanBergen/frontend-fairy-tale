import "./FairyTales.css";
import img1 from "../../assets/Mask Group 6.png";

function FairyTale(props) {
	return (
		<div className="card">
			<a href={props.link}>
				{" "}
				<img src={img1} alt="" />
			</a>
			<div className="information">
				<h3>{props.name}</h3>
				<p>Student</p>
				<p>{props.age}</p>
			</div>
		</div>
	);
}

export default FairyTale;
