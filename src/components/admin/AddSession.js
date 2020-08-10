import React from "react";
import uuid from "uuid/v4";
import { connect } from "react-redux";
import { addSession } from "../../actions/Session";

const AddSession = ({ addSession }) => {
  const submit = event => {
    event.preventDefault();

    let formData = new FormData(event.target).entries();
    let data = [...[...formData]];
    let obj = {};

    obj.id = uuid();

    data.forEach(d => {
      let name = d[0];
      let value = d[1];
      obj[`${name}`] = value;
    });
    addSession(obj);
  };
  return (
    <div className="row">
      <div className="col s10 offset-s1 m6 offset-m3 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text">Add Session</h5>

        <form className="form" onSubmit={e => submit(e)}>
          <div className="row">
            <div className="input-field">
              <p className="left blue-text">Name:</p>
              <input
                className="black-text"
                type="text"
                id="name"
                name="name"
                placeholder="name"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Start:</p>
              <input
                className="black-text"
                type="text"
                id="start"
                name="start"
                placeholder="start"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">End:</p>
              <input
                className="black-text"
                type="text"
                id="end"
                name="end"
                placeholder="end"
                required
              />
            </div>

            <div className="input-field">
              <p className="left blue-text">Description:</p>
              <input
                className="black-text"
                type="text"
                id="description"
                name="description"
                placeholder="description"
                required
              />
            </div>
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { addSession })(AddSession);
