import React, { Component } from 'react';
import {SignUpContent} from "../../components/organisms";
import { GeneralTemplate } from "../../templates";

class SignUp extends Component {
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
        <SignUpContent login={login} {...props}/>
      </GeneralTemplate>
    );
  }
}

export default SignUp;
