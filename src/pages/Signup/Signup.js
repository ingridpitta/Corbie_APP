import React, { Component } from 'react';
import { GeneralTemplate } from "../../templates";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { loggedUser, logout, userInfo, login } = this.props;
    return (
      <GeneralTemplate
        logout={logout}
        loggedUser={loggedUser}
        userInfo={userInfo}
      >
        <h1>SignUp</h1>
      </GeneralTemplate>
    );
  }
}

export default SignUp;
