import React, { Component } from 'react';
import { Text, Table, Modal } from '../../atoms';
import {Tag as Status, Space, Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import FormProjectCreate from '../FormProjectCreate/FormProjectCreate';
import { Link } from 'react-router-dom';
import './ProjectView.css';




class ProjectView extends Component {
  state = {
    searchText: '',
    searchedColumn: '',
    loading: false,
    visible: false,
  };
// Table Functions
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
// modal functions
  showModal = () => {
    this.setState({
      visible: true,
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
    componentDidMount = async () => {
      await this.props.loadProjects();
      }
      render(){

      const columns = [
        {
          title: 'Nome',
          dataIndex: 'title',
          key: 'title',
          ...this.getColumnSearchProps('title'),
          render: text =>
          <Link to="/edit-project">
          {text}
          </Link>,
        },
        {
          title: 'Data de criação',
          dataIndex: 'creationDate',
          key: 'creationDate',
          // ...this.getColumnSearchProps('creationDate'),
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          ...this.getColumnSearchProps('status'),
          render: status => (
            <>
              {status.map(status => {
                let color = status.length > 5 ? 'geekblue' : 'green';
                if (status === 'CANCELED') {
                  color = 'volcano';
                } else if(status === 'BACKLOG'){
                  color = 'default'
                }
                return (
                  <Status color={color} key={status}>
                    {status}
                  </Status>
                );
              })}
            </>
          ),
        },
        {
          title: 'Horas Estimadas',
          dataIndex: 'duration',
          key: 'duration',
          // ...this.getColumnSearchProps('duration'),
        },
        {
          title: 'Horas Trabalhadas',
          dataIndex: 'durationnow',
          key: 'durationnow',
          // ...this.getColumnSearchProps('durationnow'),
        },
        {
          title: 'Prazo',
          dataIndex: 'dueDate',
          key: 'dueDate',
          // ...this.getColumnSearchProps('dueDate'),
        },
        {
          title: 'Ação',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
            <Link to="/edit-project">
            <EditOutlined />
            </Link>
            <Link to="/edit-project">
            <DeleteOutlined />
            </Link>
            </Space>
          ),
        },
      ];


        return(

<div>
<div className="head" >Seus Projetos</div>

      <>
      <div className="modalButton" >
          <Modal onCancel={this.handleCancel} showModal={this.showModal} handleOk={this.handleOk} onCancelVisible={this.state.visible}>
            <FormProjectCreate onCancel={this.handleCancel} options={this.props.options}/>
          </Modal>
      </div>
        <Table columns={columns} projects={this.props.projects} onChange={this.handleChange} />
      </>
</div>
        )
    }
}

export default ProjectView;