import React from "react";
import { Container, Img } from "./layoutElements";
import Logo from "../public/img/imgshare-logo.png";
import { Nav } from "react-bootstrap";
import "../public/css/styles.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <a href="/" class="navbar-brand">
            <Img src={Logo} alt="" />
          </a>
        </div>
      </Nav>
      <div class="container p-4">
        <div class="row">
          <div class="col-md-8">{children}</div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </Container>
  );
};

export default Layout;
