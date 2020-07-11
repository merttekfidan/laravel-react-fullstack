import React from "react";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <React.Fragment>
      <li className="nav-item dropdown no-arrow mx-1">
        <Link
          className="nav-link dropdown-toggle"
          to={() => false}
          id="messagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-envelope fa-fw"></i>
          <span className="badge badge-danger badge-counter">10</span>
        </Link>
      </li>
      <li className="nav-item dropdown no-arrow mx-1">
        <div
          className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="messagesDropdown"
        >
          <h6 className="dropdown-header">Message Center</h6>
          <Link
            className="dropdown-item d-flex align-items-center"
            to={() => false}
          >
            <div className="dropdown-list-image mr-3">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                alt=""
              />
              <div className="status-indicator bg-success"></div>
            </div>
            <div className="font-weight-bold">
              <div className="text-truncate">
                Hi there! I am wondering if you can help me with a problem I've
                been having.
              </div>
              <div className="small text-gray-500">Emily Fowler · 58m</div>
            </div>
          </Link>
          <Link
            className="dropdown-item d-flex align-items-center"
            to={() => false}
          >
            <div className="dropdown-list-image mr-3">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                alt=""
              />
              <div className="status-indicator"></div>
            </div>
            <div>
              <div className="text-truncate">
                I have the photos that you ordered last month, how would you
                like them sent to you?
              </div>
              <div className="small text-gray-500">Jae Chun · 1d</div>
            </div>
          </Link>
          <Link
            className="dropdown-item d-flex align-items-center"
            to={() => false}
          >
            <div className="dropdown-list-image mr-3">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                alt=""
              />
              <div className="status-indicator bg-warning"></div>
            </div>
            <div>
              <div className="text-truncate">
                Last month's report looks great, I am very happy with the
                progress so far, keep up the good work!
              </div>
              <div className="small text-gray-500">Morgan Alvarez · 2d</div>
            </div>
          </Link>
          <Link
            className="dropdown-item d-flex align-items-center"
            to={() => false}
          >
            <div className="dropdown-list-image mr-3">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                alt=""
              />
              <div className="status-indicator bg-success"></div>
            </div>
            <div>
              <div className="text-truncate">
                Am I a good boy? The reason I ask is because someone told me
                that people say this to all dogs, even if they aren't good...
              </div>
              <div className="small text-gray-500">Chicken the Dog · 2w</div>
            </div>
          </Link>
          <Link
            className="dropdown-item text-center small text-gray-500"
            to={() => false}
          >
            Read More Messages
          </Link>
        </div>
      </li>
    </React.Fragment>
  );
}
