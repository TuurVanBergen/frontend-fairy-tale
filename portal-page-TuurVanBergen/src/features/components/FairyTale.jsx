import "./FairyTales.css";
import img1 from "../../assets/Mask Group 6.png";

function FairyTale(props) {
	return (
		<div className="card">
			<img src={img1} alt="" />
			<div className="info">
				<h3>{props.name}</h3>
				<p>Student</p>
				<p>{props.age}</p>
				<a href={props.link}>hey</a>
			</div>
		</div>
	);
}

export default FairyTale;
