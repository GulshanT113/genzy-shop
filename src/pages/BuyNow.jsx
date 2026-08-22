import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_ORDER } from "../redux/constants";
import { clearCart } from "../redux/action";

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = location.state?.products || [];

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    employment: "",
    payment: "UPI",
  });

  const totalAmount = products.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = () => {
    const newOrders = products.map((item) => ({
      id: "ORD" + Date.now() + item.id,
      productName: item.title,
      date: new Date().toLocaleDateString(),
      status: "Processing",
      amount: item.price,
    }));

    dispatch({
      type: ADD_ORDER,
      payload: newOrders,
    });

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      dispatch(clearCart());
      navigate("/layout/orders");
    }, 3000);
  };

  return (
    <div className="container">
      {/* SUCCESS POPUP */}
      {showPopup && (
        <div
          className="alert alert-success text-center position-fixed"
          style={{
            top: "20px",
            right: "20px",
            width: "300px",
            zIndex: 1000,
          }}
        >
          🎉 Order Confirmed Successfully!
        </div>
      )}

      <h3 className="mb-4">Checkout</h3>

      {/* ORDER SUMMARY */}
      <div className="card p-3 mb-4">
        <h5>Order Summary</h5>

        {products.map((item) => (
          <div key={item.id} className="d-flex justify-content-between">
            <span>{item.title}</span>
            <span>₹ {item.price}</span>
          </div>
        ))}

        <hr />
        <h5>Total: ₹ {totalAmount}</h5>
      </div>

      {/* CUSTOMER FORM */}
      <div className="card p-4">
        <input
          className="form-control mb-3"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Phone Number"
          name="phone"
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Address"
          name="address"
          onChange={handleChange}
        />

        {/* Employment */}
        <select
          className="form-select mb-3"
          name="employment"
          onChange={handleChange}
        >
          <option>Select Employment</option>
          <option>Self Employed</option>
          <option>Business</option>
          <option>Government Job</option>
          <option>Private Job</option>
          <option>IT Job</option>
        </select>

        {/* PAYMENT OPTIONS */}
        <h5 className="mt-3">Payment Method</h5>

        <div className="form-check">
          <input
            type="radio"
            name="payment"
            value="UPI"
            className="form-check-input"
            onChange={handleChange}
            defaultChecked
          />
          <label className="form-check-label">
            UPI / PhonePe / GPay / Paytm
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            name="payment"
            value="COD"
            className="form-check-input"
            onChange={handleChange}
          />
          <label className="form-check-label">Cash On Delivery</label>
        </div>

        <button className="btn btn-success mt-4" onClick={handleConfirmOrder}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
