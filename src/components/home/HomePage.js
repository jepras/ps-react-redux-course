import React, { Component } from "react";
import { Link } from "react-router";

export default class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>
        <p>React, redux & react router</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }
}
