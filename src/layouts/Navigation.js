import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
	{ name: "start", path: "/", exact: true },
	{ name: "oferta", path: "/products" },
	{ name: "kontakt", path: "/contact" },
	{ name: "log-in", path: "/login" },
];

const menu = list.map((item) => (
	<li key={item.name}>
		<NavLink to={item.path} exact={item.exact ? item.exact : false}>
			{item.name}
		</NavLink>
	</li>
));
const Navigation = () => {
	const [show, setShow] = React.useState();
	return (
		<div className={show ? "show navWrapper" : "navWrapper"}>
			<nav className="main">
				<ul onClick={() => setShow(!show)}>{menu}</ul>
			</nav>
			<div className="navButton">
				<div onClick={() => setShow(!show)}>
					<i
						className={
							show ? "show fa-solid fa-arrow-right" : "fa-solid fa-arrow-right"
						}
					></i>
					<p>MENU</p>
					<i
						className={
							show ? "show fa-solid fa-arrow-right" : "fa-solid fa-arrow-right"
						}
					></i>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
