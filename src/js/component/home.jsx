import React from "react";
import Clock from "./homeComponents/Reloj.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
		<div className="container-fluid">
			<Clock />
			

		</div>
	);
};

export default Home;
