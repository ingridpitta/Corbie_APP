import React, { Component } from "react";
import { MasterTemplate } from "../../templates";
import DashboardView from "../../components/organisms/DashboardView/DashboardView";

class Dashboard extends Component {
  render() {
    return (
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
        <DashboardView />
      </MasterTemplate>
    );
  }
}

export default Dashboard;
