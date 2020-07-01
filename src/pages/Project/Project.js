import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";

class Project extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { loggedUser, logout, userInfo, location } = this.props;
    const { projectInfos } = location.state;

    console.log({ projectInfos });
    return (
      <GeneralTemplate
        logout={logout}
        loggedUser={loggedUser}
        userInfo={userInfo}
      >
        <h1>Project</h1>
      </GeneralTemplate>
    );
  }
}

export default Project;
