import React from "react";
import Sidebar from "../theme/Sidebar";
import Topbar from "../theme/Topbar";
export default function Master(props) {
  return (
    <React.Fragment>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <h1>asd</h1>
            <h2>{props.children}</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
