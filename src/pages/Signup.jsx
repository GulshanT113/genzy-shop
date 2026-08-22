import React from "react";
import { Link } from "react-router-dom";
import BG from "../assets/bg.png";
const Signup = () => {
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
        {/* <div className="mb-4 fs-3 fw-bold text-warning">Genzy Shop</div> */}

        {/* Card */}
        <div className="card p-4 shadow bg-black" style={{ width: "350px" }}>
          <h3 className="text-center text-white mb-4">Signup</h3>

          <form>
            <div className="mb-3">
              <label className="form-label text-white fw-bold">Full Name</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label text-white fw-bold">Email</label>
              <input type="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label text-white fw-bold">Password</label>
              <input type="password" className="form-control" required />
            </div>

            <button className="btn btn-warning fw-bold w-100">Register</button>

            <p className="text-center text-white fw-bold mt-3 mb-0">
              Already have account? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
