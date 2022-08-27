import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
import { useState } from "react";

const list = [
	{ name: "start", path: "/", exact: true },
	{ name: "oferta", path: "/products" },
	{ name: "kontakt", path: "/contact" },
	{ name: "panel admina", path: "/login" },
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
				<ul>{menu}</ul>
			</nav>
			<div className="navButton">
				<button onClick={() => setShow(!show)}>
					<i class="fa-solid fa-arrow-right"></i>
					<i class="fa-solid fa-arrow-left"></i>
				</button>
			</div>
		</div>
	);
};

export default Navigation;
