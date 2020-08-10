import "./App.css";

import React, { Fragment } from "react";
import { Provider } from "react-redux";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import store from "./store";

import NavBar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Services from "./components/Services";

function App() {
  let options = {};
  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, options);
  });

  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, options);
  });

  return (
    <Provider store={store.store}>
      <Router basename={"app"} hashType={"noslash"}>
        <Fragment>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Showcase} />
            <Route exact path="/dashboard" component={Dashboard} />

            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/services" component={Services} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
