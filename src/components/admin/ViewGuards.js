import React from "react";
import { connect } from "react-redux";

const ViewGuards = ({ guards }) => {
  const submit = e => {
    e.preventDefault();
  };
  return (
    <div className="portal-component">
      <table className="responsive-table striped highlight">
        <thead>
          <tr>
            <th className="blue-text" data-field="id">
              Id
            </th>
            <th className="blue-text" data-field="firstname">
              Firstname
            </th>
            <th className="blue-text" data-field="surname">
              Surname
            </th>
            <th className="blue-text" data-field="lastname">
              Lastname
            </th>
            <th className="blue-text" data-field="gender">
              Gender
            </th>
          </tr>
        </thead>
        <tbody>
          {guards.map(g => {
            return (
              <tr>
                <td>{g.id}</td>
                <td>{g.firstname}</td>
                <td>{g.surname}</td>
                <td>{g.lastname}</td>
                <td>{g.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapPropsToState = state => ({
  guards: state.guards
});

export default connect(mapPropsToState)(ViewGuards);
