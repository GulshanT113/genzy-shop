import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, clearCart } from "../redux/action";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [removeAll, setRemoveAll] = useState(false);

  const handleBuySingle = (item) => {
    navigate("/layout/buyNow", { state: { products: [item] } });
  };

  const handleBuyAll = () => {
    navigate("/layout/buyNow", { state: { products: cartItems } });
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveAll = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1 className="text-center">Your cart is empty...</h1>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-dark">
                <tr className="fw-bold fs-4">
                  <th>#</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id}>
                    <td className="fw-bold fs-5">{index + 1}</td>

                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        width="60"
                        height="60"
                        style={{ objectFit: "contain" }}
                      />
                    </td>

                    <td className="fw-bold fs-5">{item.title}</td>
                    <td className="fw-bold fs-5">₹ {item.price}</td>
                    <td className="fw-bold fs-5 text-center">1</td>
                    <td className="fw-bold fs-5">₹ {item.price}</td>

                    <td className="text-center">
                      <button
                        className="btn btn-success btn-lg me-3"
                        onClick={() => handleBuySingle(item)}
                      >
                        Buy
                      </button>

                      <button
                        className="btn btn-danger btn-lg"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-end mb-3">
            <button
              className="btn btn-success btn-lg me-3"
              onClick={handleBuyAll}
            >
              Buy All Products
            </button>
            <button className="btn btn-danger btn-lg" onClick={handleRemoveAll}>
              Remove All Products
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
