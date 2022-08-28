import React from "react";
import "../styles/Products.css";

const Product = ({ id, text }) => {
	if (id === "Inwestor zastępczy") {
		return (
			<article className="product">
				<h1> {id}</h1>
				<p>
					Skorzystaj z usługi inwestora zastępczego co pozwoli Ci zaoszczędzić
					nie tyle pieniądze ale również czas i nerwy.
				</p>
			</article>
		);
	} else if (id === "Nadzór inwestorski") {
		return (
			<article className="product">
				<h1> {id}</h1>
				<p>
					Nasz inspektor nadzoru inwestorskiego dopilnuje Twoich interesów oraz
					tego, że prawidłowo zrealizujesz projekt.
				</p>
			</article>
		);
	} else if (id === "Odbiory techniczne") {
		return (
			<article className="product">
				<h1> {id}</h1>
				<p>
					Upewnij się przy pomocy profesjonalistów, że Twoje nowe wymarzone
					mieszkanie lub dom zostały poprawnie wykonane.
				</p>
			</article>
		);
	} else if (id === "Doradztwo prawne") {
		return (
			<article className="product">
				<h1> {id}</h1>
				<p>
					Skorzystaj z wieloletniego doświadczenia w realizacji inwestycji
					budowlanych przez naszego prawnika.
				</p>
			</article>
		);
	}
};
export default Product;
