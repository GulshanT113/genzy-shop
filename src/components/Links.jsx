import React from "react";
import { NavLink } from "react-router-dom";
const Links = ({ name, to }) => {
  return (
    <li className="nav-item mb-2">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active fw-bold text-primary" : "text-dark"} fw-bold fs-5`
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

export default Links;
