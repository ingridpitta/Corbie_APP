/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";

const GeneralTemplate = ({ children, loggedUser, logout, userInfo }) => {
  return (
    <div className="generalTemplate--container">
      <nav>
        <div>
          <Link to="/">
            <Logo />
          </Link>
          <ul>
            {loggedUser ? (
              <React.Fragment>
                <Link to="/dashboard">
                  <li>Dashboard</li>
                </Link>
                <Link to="/" onClick={logout}>
                  <li>Sair</li>
                </Link>
                {userInfo && (
                <div className="generalTemplate--userInfo">
                    <h2>UI</h2>
                </div>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/login">
                  <li>Entrar</li>
                </Link>
                <Link to="/signup">
                  <li>Cadastrar</li>
                </Link>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default GeneralTemplate;
