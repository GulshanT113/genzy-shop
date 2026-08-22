import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div
        className="card h-100 shadow-sm"
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigate(`/layout/products/${product.id}`, { state: product })
        }
      >
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: "220px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title text-truncate">{product.title}</h6>

          <p className="text-muted small mb-1">Category: {product.category}</p>

          <h5 className="text-success">₹ {Math.round(product.price * 83)}</h5>

          <div className="mt-auto">
            <button className="btn btn-primary w-100">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
