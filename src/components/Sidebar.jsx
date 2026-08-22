import React from "react";
import Links from "./Links";

const linkData = [
  {
    name: "Dashboard",
    to: "/layout/dashboard",
  },
  {
    name: "Products",
    to: "/layout/products",
  },
  {
    name: "Cart",
    to: "/layout/cart",
  },
  {
    name: "Orders",
    to: "/layout/orders",
  },
  {
    name: "Profile",
    to: "/layout/profile",
  },
];
const Sidebar = ({ show }) => {
  return (
    <div
      className={`bg-light p-3 sidebar ${
        show ? "d-block" : "d-none d-md-block"
      }`}
    >
      <ul className="nav flex-column">
        {linkData.map((data) => (
          <Links name={data.name} to={data.to} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
