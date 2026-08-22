import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.reducer);
  console.log("cart data = ", cartData);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <button
        className="btn btn-outline-light d-md-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <span className="navbar-brand mb-0 h1 ms-2 fs-2">Genzy Shop</span>

      <div>
        <button className="btn btn-warning btn-sm fs-5 me-3">
          {cartData?.length}
        </button>
        <button
          className="btn btn-warning btn-sm fs-5"
          onClick={() => {
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
