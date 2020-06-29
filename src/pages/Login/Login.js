import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import { LoginContent } from "../../components/organisms";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { loggedUser, logout, userInfo, login, ...props } = this.props;
    return (
      <GeneralTemplate
        logout={logout}
        loggedUser={loggedUser}
        userInfo={userInfo}
      >
        <LoginContent login={login} {...props} />
      </GeneralTemplate>
    );
  }
}

export default Login;
