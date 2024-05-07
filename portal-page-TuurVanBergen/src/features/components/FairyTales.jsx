import React from "react";
import "./FairyTales.css";
import apiGet from "../../core/utils/api.jsx";
import { useEffect, useState } from "react";
import DATA from "../../assets/FairyTales.json";
import FairyTale from "./FairyTale.jsx";
// const url = "../../assets/FairyTales.json";

function FairyTales() {
	// const [apiData, setApiData] = useState([]);

	// useEffect(() => {
	// 	async function apiCall() {
	// 		const result = await apiGet(url);
	// 		setApiData(result);
	// 		console.log(result);
	// 	}
	// 	apiCall();
	// }, []);

	return (
		<div className="FairyTales">
			<div className="title">
				<h1>Populair</h1>
			</div>
			{DATA.map((item) => (
				<FairyTale
					key={item.key}
					name={item.name}
					age={item.age}
					link={item.link}
				/>
			))}
			{/* <div className="card">
				<img src={img1} alt="" />
				<div className="info">
					<h3>Rapunzel</h3>
					<p>Student</p>
					<p>Hasan Taha</p>
				</div>
			</div> */}
		</div>
	);
}

export default FairyTales;
