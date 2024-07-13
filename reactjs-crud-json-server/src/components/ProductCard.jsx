import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import ProductEdit from "./ProductEdit";
import { ProductContext } from "../context/productContext";

function ProductCard({ product }) {
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const [visibleEdit, setVisibleEdit] = useState(false);

  const { onDelete } = useContext(ProductContext);

  return (
    <div className="card">
      {visibleEdit ? (
        <ProductEdit product={product} setVisibleEdit={setVisibleEdit} />
      ) : (
        <>
          <div className="edit-delete">
            <MdEdit className="icon-edit" onClick={() => setVisibleEdit((current) => !current)} />
            <MdDeleteForever className="icon-delete" onClick={() => onDelete(product.id)} />
          </div>
          <img
            src={product.imageURL}
            alt="Image of something"
            style={{
              width: "100%",
              height: "200px",
              borderRadius: " 10px 10px 0px 0px",
            }}
          />
          <div className="container">
            <h4>
              <b>{product.nama}</b>
            </h4>
            <p>{product.deskripsi}</p>
          </div>
          <div className={`card-keranjang ${jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"}`}>
            {jumlahProduct > 0 ? (
              <>
                <button className="button" onClick={() => setJumlahProduct((current) => current - 1)}>
                  -
                </button>
                <div>{jumlahProduct}</div>
                <button className="button" onClick={() => setJumlahProduct((current) => current + 1)}>
                  +
                </button>
              </>
            ) : (
              <div className="keranjang" onClick={() => setJumlahProduct((current) => current + 1)}>
                + Keranjang
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;
