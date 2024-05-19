import "./FairyTales.css";
import img1 from "../../assets/Mask Group 6.png";

function FairyTale(props) {
	//this component gets the props from the FairyTales component
	return (
		<div className="card">
			<a href={props.link}>
				<img src={img1} alt="" />
			</a>
			<div className="information">
				<h3>{props.name}</h3>
				<p>Student</p>
				<p>{props.title}</p>
			</div>
		</div>
	);
}

export default FairyTale;
