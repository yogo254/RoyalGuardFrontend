import React from "react";
import AdminActions from "./admin/AdminActions";
import { connect } from "react-redux";
import AddGuard from "./admin/AddGuard";
import AddSession from "./admin/AddSession";
import ViewGuards from "./admin/ViewGuards";
import ViewSession from "./admin/ViewSessions";

const Dashboard = ({ context }) => {
  return (
    <div className="sub-component">
      <h5>ADMIN DASHBOARD</h5>
      <AdminActions />
      {context === "addguard" ? <AddGuard /> : null}
      {context === "addsession" ? <AddSession /> : null}
      {context === "viewsessions" ? <ViewSession /> : null}
      {context === "viewguards" ? <ViewGuards /> : null}
    </div>
  );
};

const mapPropToState = state => ({
  context: state.context
});

export default connect(mapPropToState)(Dashboard);
