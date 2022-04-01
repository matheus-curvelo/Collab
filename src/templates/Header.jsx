import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Style = styled.section``;

function Navigation() {
  return (
    <Style id="header">
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/use-cases">
                    Use Cases
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/developers">
                    Developers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Style>
  );
}

export default Navigation;
