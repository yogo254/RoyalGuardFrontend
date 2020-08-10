import React from "react";
import { connect } from "react-redux";
import { setContext } from "../../actions/Context";

const AdminActions = ({ setContext }) => {
  return (
    <div className="actions-wrapper">
      <ul className="admin-actions">
        <li className="btn" onClick={e => setContext("addguard")}>
          add guard
        </li>
        <li className="btn" onClick={e => setContext("addsession")}>
          Add sessions
        </li>
        <li className="btn" onClick={e => setContext("viewguards")}>
          View Guards
        </li>
        <li className="btn" onClick={e => setContext("viewsessions")}>
          View sessions
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { setContext })(AdminActions);
