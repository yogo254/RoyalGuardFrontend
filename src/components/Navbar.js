import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className=" pinned-nav">
        <div className="nav-wrapper">
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger show-on-large"
          >
          <i class="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link
                to="/"
                className=" btn-flat  white-text waves-effect waves-light nav-btn  modal-trigger"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="btn-flat  white-text waves-effect waves-light nav-btn"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className=" btn-flat  white-text waves-effect waves-light nav-btn  modal-trigger"
              >
                sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <div className="user-view">
            <div className="background"></div>
            <img src="icons/second.png" />

            <p className="white-text name">Royal Guard</p>
          </div>
        </li>
        <li className="sidenav-close">
          <Link
            to="/"
            className=" btn-flat  white-text waves-effect waves-light nav-btn  modal-trigger"
          >
            Home
          </Link>
        </li>
        <li className="sidenav-close">
          <Link
            to="/services"
            className="btn-flat  white-text waves-effect waves-light nav-btn"
          >
            services
          </Link>
        </li>
        <li className="sidenav-close">
          <Link
            to="/login"
            className=" btn-flat  white-text waves-effect waves-light nav-btn  modal-trigger"
          >
            sign in
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
