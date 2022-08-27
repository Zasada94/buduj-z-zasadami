import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footerWrapper">
				<p>Paweł Zasada </p> <i className="fa-solid fa-copyright"></i>
				<p>2022</p>
			</div>
			<Route
				path="/"
				exact
				render={(props) => {
					return <p>Main page</p>;
				}}
			/>
			<Route
				path="/:page"
				exact
				render={(props) => {
					console.log(props);
					return (
						<>
							<p>{props.match.params.page}</p>
						</>
					);
				}}
			/>
			<Route
				path="/:page/:idProduct"
				exact
				render={(props) => {
					console.log(props);
					return (
						<>
							<p>{props.match.params.idProduct}</p>
						</>
					);
				}}
			/>
		</div>
	);
};

export default Footer;
