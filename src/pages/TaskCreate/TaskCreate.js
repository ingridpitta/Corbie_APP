import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { FormTaskCreate } from '../../components/molecules';


class TaskCreate extends Component {
  render() {
    return(
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
      <FormTaskCreate {...this.props} />
      </MasterTemplate>
    )
  }
}

export default TaskCreate;