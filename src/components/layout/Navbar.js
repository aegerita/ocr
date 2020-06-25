import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Nav, Navbar as ReactNavbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const Navbar = ({ icon, title }) => {
  // defaultProps are used when nothing is passed from the parent
  return (
    <Fragment>
      <ReactNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactNavbar.Brand href="/">{title}</ReactNavbar.Brand>
        <ReactNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
          </Nav>
          <Nav></Nav>
        </ReactNavbar.Collapse>
      </ReactNavbar>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: "OCR",
  icon: "",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Navbar;
