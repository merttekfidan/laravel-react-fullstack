import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Profile() {
  const [users, setUsers] = useState([]);
  async function fetchData() {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then((res) => {
        setUsers(res.data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <li className="nav-item dropdown no-arrow">
      <Link
        className="nav-link dropdown-toggle"
        to={() => false}
        id="userDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
          {users.name}
        </span>
        <img
          className="img-profile rounded-circle"
          alt=""
          src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
        />
      </Link>
      <div
        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
        aria-labelledby="userDropdown"
      >
        <Link className="dropdown-item" to={() => false}>
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
          Profile
        </Link>
        <Link className="dropdown-item" to={() => false}>
          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
          Settings
        </Link>
        <Link className="dropdown-item" to={() => false}>
          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
          Activity Log
        </Link>
        <div className="dropdown-divider"></div>
        <Link
          className="dropdown-item"
          to={() => false}
          data-toggle="modal"
          data-target="#logoutModal"
        >
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Logout
        </Link>
      </div>
    </li>
  );
}
