import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import { HomeContent } from "../../components/organisms";

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
        <HomeContent />
      </GeneralTemplate>
    );
  }
}

export default Home;
