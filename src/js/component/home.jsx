import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
//include images into your bundle

import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar titulo="Start Bootstrap" />
			<Jumbotron />
			<div className="row">
				<Card
					img="https://images.unsplash.com/photo-1648153243402-065f44265ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					titulo="Naturaleza"
				/>
				<Card
					img="https://images.unsplash.com/photo-1642445326734-95bcefe75fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxMHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
					titulo="Isla"
				/>
				<Card
					img="https://images.unsplash.com/photo-1636572321084-dfdbaa753a0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
					titulo="Sabiduría"
				/>
				<Card
					img="https://images.unsplash.com/photo-1640659234623-5448f914f208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2NHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
					titulo="Paisaje"
				/>
			</div>
		</div>
	);
};

export default Home;
