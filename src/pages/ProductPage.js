import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = ({ match }) => {
  console.log(match);
  return (
    <>
      <Product id={match.params.id} />
      <Link to="/products">Powrót do wyboru usług</Link>
    </>
  );
};

export default ProductPage;
