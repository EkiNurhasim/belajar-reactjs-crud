import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProviderProduct from "./context/productContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderProduct>
      <App />
    </ProviderProduct>
  </React.StrictMode>
);
