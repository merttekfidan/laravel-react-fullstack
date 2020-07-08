import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
export default function Master(props) {
  return (
    <React.Fragment>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <h1>asd</h1>
            <h2>{props.children}</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
