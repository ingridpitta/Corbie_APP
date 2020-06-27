import React, { Component } from 'react';
import { GeneralTemplate } from "../../templates";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { loggedUser, logout, userInfo } = this.props;
    return (
      <GeneralTemplate logout={logout} loggedUser={loggedUser} userInfo={userInfo}>
        <h1>DashBoard</h1>
      </GeneralTemplate>
    );
  }
}

export default DashBoard;
