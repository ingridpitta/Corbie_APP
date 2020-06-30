import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  loggedUser,
  logout,
  userInfo,
  component: Component,
  ...props
}) => {
  return loggedUser ? (
    <Route
      {...props}
      render={routeProps => (
        <Component
          {...props}
          {...routeProps}
          loggedUser={loggedUser}
          logout={logout}
          userInfo={userInfo}
        />
      )}
    />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
