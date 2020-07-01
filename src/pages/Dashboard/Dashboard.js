import React, { Component } from "react";
import { DashBoardContent } from "../../components/organisms";
import { GeneralTemplate } from "../../templates";
import ApiService from "../../api/Service";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount = async () => {
    const projects = await ApiService.listAllProjects();

    this.setState({ projects });
  };

  onClick = async e => {
    const { projects } = this.state;
    const id = e.target.id.split("--")[0];

    const project = await projects.filter(item => item._id.includes(id));

    const tasks = await ApiService.listAllTasksFromProject(id);

    const projectsInfo = { ...project[0], tasks };

    this.props.history.push({
      pathname: "/project",
      state: {
        projectsInfo
      }
    });
  };

  render() {
    const { loggedUser, logout, userInfo, ...props } = this.props;
    const { projects } = this.state;
    
    return (
      <GeneralTemplate
        logout={logout}
        loggedUser={loggedUser}
        userInfo={userInfo}
      >
        <DashBoardContent
          userInfo={userInfo}
          projects={projects}
          onClick={this.onClick}
          {...props}
        />
      </GeneralTemplate>
    );
  }
}

export default DashBoard;
