import { createContext, useState } from "react";
import { createProducts, deleteProducts, fetchProducts, updateProducts } from "../api/ProductAPI";

export const ProductContext = createContext();

const ProviderProduct = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetchProducts();
    setProducts(response.data);
  };

  const onCreate = async (product) => {
    const response = await createProducts(product);
    setProducts((current) => [...current, response.data]);
  };

  const onDelete = async (id) => {
    await deleteProducts(id);
    const updateData = products.filter((data) => data.id !== id);
    setProducts(updateData);
  };

  const onEdit = async (id, data) => {
    const response = await updateProducts(id, data);
    const updateData = products.map((product) => {
      if (product.id === id) {
        return { ...product, ...response.data };
      } else {
        return product;
      }
    });
    setProducts(updateData);
  };

  const data = {
    products,
    fetchData,
    onCreate,
    onDelete,
    onEdit,
  };

  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
};

export default ProviderProduct;
