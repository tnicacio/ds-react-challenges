import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-primary navbar-custom">
      <div className="container-fluid">
        <Link to="/" className="nav-text d-flex align-items-center">
          <span id='nav-logo'>Carros Top</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topcars-navbar"
          aria-controls="topcars-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mb-3 mb-md-0" id="topcars-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" className="nav-text nav-tab">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="cars" className="nav-text nav-tab">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
