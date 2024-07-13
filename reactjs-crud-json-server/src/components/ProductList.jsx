import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/productContext";

function ProductList() {
  const { products } = useContext(ProductContext);
  return (
    <div className="cards">
      {products.map((data) => {
        return <ProductCard key={data.id} product={data} />;
      })}
    </div>
  );
}

export default ProductList;
