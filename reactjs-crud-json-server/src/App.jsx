import React, { useContext, useEffect } from "react";
import "./App.css";
import ProductCreate from "./components/ProductCreate";
import ProductList from "./components/ProductList";
import { ProductContext } from "./context/productContext";

function App() {
  const { fetchData } = useContext(ProductContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="app-title">Belanja Mobil</h2>
      <ProductCreate />
      <ProductList />
    </>
  );
}

export default App;
