import React, { Component } from "react";
import { DashBoardContent, ModalContent } from "../../components/organisms";
import { GeneralTemplate, ModalTemplate } from "../../templates";
import ApiService from "../../api/Service";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      visible: false,
      loading: false,
      status: ""
    };
  }

  componentDidMount = async () => {
    const projects = await ApiService.listAllProjects();

    this.setState({ projects });
  };

  onClick = async e => {
    const { projects } = this.state;
    const id = e.target.attributes.data.value;

    const projectInfos = await this.getProjectInfos(projects, id);

    this.props.history.push({
      pathname: "/project",
      state: {
        projectInfos
      }
    });
  };

  getProjectInfos = async (projects, id) => {
    const project = await projects.filter(item => item._id.includes(id));
    const tasks = await ApiService.listAllTasksFromProject(id);

    return { ...project[0], tasks };
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  onSubmitMethod = async (values, actions) => {
    console.log({ values });
    const data = { ...values, status: this.state.status };
    await ApiService.createProject(data);

    actions.setSubmitting(false);

    this.handleCancel();
  };

  getData = (values, data) => {
    console.log({ data });
    this.setState({ status: data.value });
  };

  render() {
    const { loggedUser, logout, userInfo, ...props } = this.props;
    const { projects, visible, loading, status } = this.state;

    return (
      <React.Fragment>
        {visible && (
          <ModalTemplate>
            <ModalContent
              pathname="dashboard"
              visible={visible}
              loading={loading}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              getData={this.getData}
              title="Cadastre seu projeto"
              status={status}
              onSubmitMethod={this.onSubmitMethod}
            />
          </ModalTemplate>
        )}
        <GeneralTemplate
          logout={logout}
          loggedUser={loggedUser}
          userInfo={userInfo}
        >
          <DashBoardContent
            userInfo={userInfo}
            projects={projects}
            onClick={this.onClick}
            showModal={this.showModal}
            {...props}
          />
        </GeneralTemplate>
      </React.Fragment>
    );
  }
}

export default DashBoard;
