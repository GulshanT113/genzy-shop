import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />

      <div className="container-fluid flex-grow-1">
        <div className="row">
          <div className="col-md-3 col-lg-2 p-0">
            <Sidebar show={showSidebar} />
          </div>

          <div className="col-md-9 col-lg-10 p-4">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
