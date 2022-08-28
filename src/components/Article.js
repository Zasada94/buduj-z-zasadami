import React from "react";
import "../styles/Article.css";

const Article = ({ title, author, text }) => {
	return (
		<article>
			<h3>{title}</h3>
			<p>{text}</p>
		</article>
	);
};

export default Article;
