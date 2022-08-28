import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

const products = [
	{
		id: "Inwestor zastępczy",
		text: "Skorzystaj z usługi inwestora zastępczego co pozwoli Ci zaoszczędzić nie tyle pieniądze ale również czas i nerwy.",
	},
	{
		id: "Nadzór inwestorski",
		text: " Nasz inspektor nadzoru inwestorskiego dopilnuje Twoich interesów oraz tego, że prawidłowo zrealizujesz projekt.",
	},

	{
		id: "Odbiory techniczne",
		text: "Upewnij się przy pomocy profesjonalistów, że Twoje nowe wymarzone mieszkanie lub dom zostały poprawnie wykonane.",
	},
	{
		id: "Doradztwo prawne",
		text: "Skorzystaj z wieloletniego doświadczenia w realizacji inwestycji budowlanych przez naszego prawnika.",
	},
];

const list = products.map((product) => (
	<li key={product.id}>
		<Link to={`/product/${product.id}`}>{product.id}</Link>
	</li>
));

const ProductListPage = () => {
	return (
		<div className="products">
			<h2>Oferta:</h2>
			<div>
				<ul>{list}</ul>
			</div>
		</div>
	);
};

export default ProductListPage;
