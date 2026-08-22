import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Orders = () => {
  const navigate = useNavigate();
  const ordersData = useSelector((state) => state.orderReducer.orders);

  return (
    <div>
      <div className="card shadow p-4">
        <h4 className="mb-4 fw-bold">My Orders</h4>

        {ordersData?.length === 0 ? (
          <h5>No Orders Yet</h5>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead className="table-dark">
                <tr className="fw-bold fs-4">
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount (₹)</th>
                </tr>
              </thead>

              <tbody>
                {ordersData.map((order) => (
                  <tr
                    key={order.id}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/layout/orders/${order.id}`, {
                        state: order,
                      })
                    }
                  >
                    <td className="fw-bold fs-5 text-primary">{order.id}</td>
                    <td className="fw-bold fs-5">{order.productName}</td>
                    <td className="fw-bold fs-5 text-danger">{order.date}</td>

                    <td>
                      <span
                        className={`fs-5 badge ${
                          order.status === "Delivered"
                            ? "bg-success"
                            : order.status === "Shipped"
                              ? "bg-primary"
                              : "bg-warning text-dark"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="fw-bold fs-5 text-success">
                      {order.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-muted fs-5 mt-3">
          Click on any order to view full details.
        </p>
      </div>
    </div>
  );
};

export default Orders;
