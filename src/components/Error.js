import React from "react";
import { Link } from "react-router-dom";
import "../css/Error.css";

function Error() {
  return (
    <div className="mainbox">
          <div className="err">
              <p>404</p></div>
      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
              <br />
        <p>
          Let's go <Link to="/">home</Link> and try from there.
        </p>
      </div>
    </div>
  );
}

export default Error;
