import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { loggedUser, logout } = this.props;
    return (
      <GeneralTemplate logout={logout} loggedUser={loggedUser}>
        <h1>Home</h1>
      </GeneralTemplate>
    );
  }
}

export default Home;
