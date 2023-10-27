import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="nav nav-pills bg-dark" >
      <li className="nav-item">
        <Link className="nav-link" to="/" activeClassName="active" exact>
          Accesos
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " activeClassName="active" to="/vehicles">
          Vehiculos
        </Link>
      </li>

    </ul>
  );
};

export default Navigation;
