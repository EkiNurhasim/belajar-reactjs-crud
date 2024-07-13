import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";

function ProductEdit({ product, setVisibleEdit }) {
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;
  const { onEdit } = useContext(ProductContext);

  const handleChange = (e) => {
    setFormData((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(product.id, formData);
    setVisibleEdit((current) => !current);
  };

  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="edit-input-text" placeholder="Nama" type="text" name="nama" value={nama} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input className="edit-input-text" placeholder="Deskripsi" type="text" name="deskripsi" value={deskripsi} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input className="edit-input-text" placeholder="ImageURL" type="text" name="imageURL" value={imageURL} onChange={handleChange} />
        </div>
        <input type="submit" className="edit-input-submit save" value="Save" />
        <button
          className="edit-input-submit cancel"
          onClick={(e) => {
            e.preventDefault();
            setVisibleEdit((current) => !current);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
