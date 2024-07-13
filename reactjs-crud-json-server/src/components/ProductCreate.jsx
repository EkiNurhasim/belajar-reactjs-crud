import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";

function ProductCreate() {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };
  const [data, setData] = useState(initialState);
  const { nama, deskripsi, imageURL } = data;
  const [visibleForm, setVisibleForm] = useState(false);
  const { onCreate } = useContext(ProductContext);

  const handleChange = (e) => {
    setData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const onEnterButton = (e) => {
    e.preventDefault();
    onCreate(data);
    setData(initialState);
  };

  return (
    <div className="product-create">
      <div className="toggle-add">
        <button className="edit-input-submit add-toggle" onClick={() => setVisibleForm((current) => !current)}>
          {visibleForm ? "CLOSE" : "ADD"}
        </button>
      </div>
      {visibleForm && (
        <form className="form" onSubmit={onEnterButton}>
          <input className="add-input-text" placeholder="Nama" type="text" name="nama" value={nama} onChange={handleChange} />
          <input className="add-input-text" placeholder="Deskripsi" type="text" name="deskripsi" value={deskripsi} onChange={handleChange} />
          <input className="add-input-text" placeholder="ImageURL" type="text" name="imageURL" value={imageURL} onChange={handleChange} />
          <input type="submit" className="edit-input-submit add" />
        </form>
      )}
    </div>
  );
}

export default ProductCreate;
