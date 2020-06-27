import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { loggedUser, logout, userInfo } = this.props;
    return (
      <GeneralTemplate
        logout={logout}
        loggedUser={loggedUser}
        userInfo={userInfo}
      >
        <h1>Home</h1>
      </GeneralTemplate>
    );
  }
}

export default Home;
