import React from "react";
import SearchBar from "./SearchBar";
import SearchBarMobile from "./SearchBarMobile";
import Notification from "./Notification";
import Message from "./Message";
import Profile from "./Profile";

export default function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>
      <SearchBar />
      <ul className="navbar-nav ml-auto">
        <SearchBarMobile />
        <Notification />
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger badge-counter">7</span>
          </a>
        </li>
        <Message />

        <div className="topbar-divider d-none d-sm-block"></div>

        <Profile />
      </ul>
    </nav>
  );
}
