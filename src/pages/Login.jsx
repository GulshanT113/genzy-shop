import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BG from "../assets/bg.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/layout/dashboard");
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center position-relative"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Bootstrap Light Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50"></div>

      <div className="d-flex flex-column align-items-center w-100 position-relative">
        {/* Logo */}
        {/* <div className="mb-4 fs-3 fw-bold">Genzy Shop</div> */}

        {/* Card */}
        <div className="card p-4 shadow bg-black" style={{ width: "350px" }}>
          <h3 className="text-center text-white mb-4">Login</h3>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-bold text-white">Email</label>
              <input type="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold text-white">Password</label>
              <input type="password" className="form-control" required />
            </div>

            <div className="mb-3 text-end fw-bold">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button className="btn btn-warning w-100 fw-bold">Login</button>

            <p className="text-center text-white mt-3 mb-0 fw-bold">
              Don't have account? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
