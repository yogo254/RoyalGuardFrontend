import React from "react";
import { connect } from "react-redux";

const ViewSessions = ({ sessions }) => {
  return (
    <div>
      <table className="responsive-table striped highlight">
        <thead>
          <tr>
            <th className="blue-text" data-field="id">
              Id
            </th>
            <th className="blue-text" data-field="name">
              Firstname
            </th>
            <th className="blue-text" data-field="start">
              Surname
            </th>
            <th className="blue-text" data-field="end">
              Lastname
            </th>
            <th className="blue-text" data-field="description">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {sessions.map(s => {
            return (
              <tr>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.start}</td>
                <td>{s.end}</td>
                <td>{s.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapPropsToState = state => ({
  sessions: state.sessions
});

export default connect(mapPropsToState)(ViewSessions);
