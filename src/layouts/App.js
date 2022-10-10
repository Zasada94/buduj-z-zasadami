import React, { Component } from "react";
import "../styles/App.css";
import { HashRouter as Router } from "react-router-dom";
import Header from "./Header.js";
import Navigation from "./Navigation.js";
import Page from "./Page.js";
import Footer from "./Footer.js";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<header>{<Header />}</header>
					<main>
						<aside>{<Navigation />}</aside>
						<section className="blog">{<Page />}</section>
					</main>
					<footer>{<Footer />}</footer>
				</div>
			</Router>
		);
	}
}

export default App;
