import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link className="nav-link" to="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item active">
        <Link
          className="nav-link"
          to={() => false}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </Link>
        <div
          id="collapseTwo"
          className="collapse show"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <Link className="collapse-item" to="buttons.html">
              Buttons
            </Link>
            <Link className="collapse-item active" to="cards.html">
              Cards
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={() => false}
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </Link>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link className="collapse-item" to="utilities-color.html">
              Colors
            </Link>
            <Link className="collapse-item" to="utilities-border.html">
              Borders
            </Link>
            <Link className="collapse-item" to="utilities-animation.html">
              Animations
            </Link>
            <Link className="collapse-item" to="utilities-other.html">
              Other
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Addons</div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={() => false}
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </Link>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <Link className="collapse-item" to="login.html">
              Login
            </Link>
            <Link className="collapse-item" to="register.html">
              Register
            </Link>
            <Link className="collapse-item" to="forgot-password.html">
              Forgot Password
            </Link>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <Link className="collapse-item" to="404.html">
              404 Page
            </Link>
            <Link className="collapse-item" to="blank.html">
              Blank Page
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Home</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Contact</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/about">
          <i className="fas fa-fw fa-table"></i>
          <span>About</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/todo">
          <i className="fas fa-fw fa-table"></i>
          <span>Todo</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}
