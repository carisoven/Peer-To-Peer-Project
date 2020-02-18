import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/action/auth";
import PropTypes from "prop-types";

const Navbar2 = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/home">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/addknow">
                <NavLink>Add Knowledge</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Link to="/" onClick={logout}>
              <NavItem>
                <NavLink>Logout</NavLink>
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

Navbar2.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar2);
