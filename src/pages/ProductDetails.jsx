import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleBuyNow = (item) => {
    navigate("/layout/buyNow", { state: { products: [item] } });
  };

  useEffect(() => {
    let result = cartData.filter((element) => {
      return element.id === product.id;
    });
    if (result.length) setIsAdded(true);
    else setIsAdded(false);
  }, [cartData]);

  if (!product) {
    return <h4 className="text-center mt-5">No Product Found</h4>;
  }

  const handleAddToCart = (product) => {
    console.log("clicked", product);
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    console.log("clicked", product);
    dispatch(removeFromCart(product.id));
  };

  return (
    <div>
      <div className="card shadow p-4">
        <div className="row">
          <div className="col-md-5 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ height: "350px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-7">
            <h4>{product.title}</h4>
            <p className="text-muted">{product.category}</p>

            <h3 className="text-success mb-3">
              ₹ {Math.round(product.price * 83)}
            </h3>

            <p>{product.description}</p>

            <p>
              ⭐ Rating: {product.rating?.rate} ({product.rating?.count}{" "}
              reviews)
            </p>

            <div className="mt-4">
              {isAdded ? (
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className="btn btn-primary me-2"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-primary me-2"
                >
                  Add to Cart
                </button>
              )}
              <button
                onClick={() => handleBuyNow(product)}
                className="btn btn-success"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="text-end mt-4">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
