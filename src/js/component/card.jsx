import React from "react";

function Card(props) {
	return (
		<div className="card col-sm-12 col-md-3" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={props.img}
				alt="card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card&apos;s content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export default Card;
