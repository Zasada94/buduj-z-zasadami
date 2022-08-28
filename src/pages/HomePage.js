import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Buduj z Zasadami!",
    author: "Paweł Zasada",
  },
  {
    id: 2,
    title: "Profesjonalne usługi inżynieryjne i prawne",
    author: "Paweł Zasada",
    text: "Nadzorujemy, kontrolujemy, sprawdzamy. Na każdym kroku dbając o satysfakcję klienta.",
  },
  {
    id: 3,
    title: "o nas",
    author: "Paweł Zasada",
    text: "Jesteśmy ludźmi świadczącymi usługi inżnieryjne i doradztwo prawne w Warszawie i okolicach. Oferujemy wielopłaszczyznowe wsparcie w sektorze budowlanym: usługę inwestora zastępczego, nadzór inwestorski, odbiory techniczne.",
  },
];
const artList = articles.map((article) => (
  <Article key={article.id} {...article} />
));

const HomePage = () => {
  return <div className="home">{artList}</div>;
};

export default HomePage;
