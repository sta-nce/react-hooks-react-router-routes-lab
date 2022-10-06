import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {

  display: "block"

}

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact
            style={linkStyles}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" exact
            style={linkStyles}
          >
            Movies
          </NavLink>

        </li>
        <li>
          <NavLink to="/directors" exact
            style={linkStyles}
          >
            Directors
          </NavLink>

        </li>
        <li>

          <NavLink to="/actors" exact
            style={linkStyles}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </div >
  );
}

export default NavBar;
