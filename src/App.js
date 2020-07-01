import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DashBoard, Home, Login, Project, SignUp } from "./pages";
import { ProtectedRoute } from "./components/authentication";
import ApiService from "./api/Service";
import "./app.styles.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      loggedUser: false
    };
    this.verifyLoggedUser();
  }

  verifyLoggedUser = async () => {
    const loggedUserInfo = localStorage.getItem("logged-user-info");

    if (loggedUserInfo) {
      this.setState({
        loggedUser: true
      });
    }
  };

  // *TODO: Checar esse erro durante o signup[não está redirecionando para a tela de dashboard no signup, mas redireciona no login]: due to a permission issue. Cache is disabled.
  login = async () => {
    const user = await ApiService.getUserInfo();
    this.setState({
      loggedUser: true,
      userInfo: user
    });
  };

  logout = () => {
    localStorage.removeItem("logged-user-info");

    this.setState({
      loggedUser: false,
      userInfo: {}
    });

    return;
  };

  render() {
    const { loggedUser, userInfo } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              loggedUser={loggedUser}
              logout={this.logout}
              userInfo={userInfo}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <SignUp
              logout={this.logout}
              login={this.login}
              loggedUser={loggedUser}
              userInfo={userInfo}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <Login
              logout={this.logout}
              loggedUser={loggedUser}
              {...props}
              login={this.login}
              userInfo={userInfo}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/project"
          component={Project}
          logout={this.logout}
          loggedUser={loggedUser}
          userInfo={userInfo}
        />
        <ProtectedRoute
          exact
          path="/dashboard"
          component={DashBoard}
          logout={this.logout}
          loggedUser={loggedUser}
          userInfo={userInfo}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
