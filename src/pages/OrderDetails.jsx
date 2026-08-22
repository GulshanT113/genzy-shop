import { useLocation, useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state;

  if (!order) {
    return <h4 className="text-center mt-5">No Order Data Found</h4>;
  }

  return (
    <div>
      <div className="card shadow p-4">
        <h4 className="mb-4">Order Details</h4>

        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Order ID:</strong>
            <p>{order.id}</p>
          </div>
          <div className="col-md-6">
            <strong>Product Name:</strong>
            <p>{order.productName}</p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Retail Price:</strong>
            <p>₹{order.amount + 2000}</p>
          </div>
          <div className="col-md-6">
            <strong>Final Price:</strong>
            <p className="text-success">₹{order.amount}</p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Quantity:</strong>
            <p>1</p>
          </div>
          <div className="col-md-6">
            <strong>Status:</strong>
            <p>{order.status}</p>
          </div>
        </div>

        <hr />

        <h5>Shipping Information</h5>

        <div className="row mb-3">
          <div className="col-md-6">
            <strong>From:</strong>
            <p>Mumbai Warehouse</p>
          </div>
          <div className="col-md-6">
            <strong>To:</strong>
            <p>Meerut, Uttar Pradesh, India</p>
          </div>
        </div>

        <div className="mb-3">
          <strong>Estimated Delivery:</strong>
          <p>05 March 2026</p>
        </div>

        <hr />

        <h5>Order History Timeline</h5>

        <ul className="list-group">
          <li className="list-group-item">✅ Order Placed - {order.date}</li>
          <li className="list-group-item">📦 Packed at Warehouse</li>
          <li className="list-group-item">🚚 Shipped via BlueDart</li>
          <li className="list-group-item">🏠 Out for Delivery</li>
          <li className="list-group-item">🎉 Delivered Successfully</li>
        </ul>

        <div className="text-end mt-4">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Back to Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
