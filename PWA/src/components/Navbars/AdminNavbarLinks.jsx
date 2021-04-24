/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, Dropdown } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <Dropdown.Item eventKey={2.1}>Notification 1</Dropdown.Item>
            <Dropdown.Item eventKey={2.2}>Notification 2</Dropdown.Item>
            <Dropdown.Item eventKey={2.3}>Notification 3</Dropdown.Item>
            <Dropdown.Item eventKey={2.4}>Notification 4</Dropdown.Item>
            <Dropdown.Item eventKey={2.5}>Another notifications</Dropdown.Item>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <Dropdown.Item eventKey={2.1}>Action</Dropdown.Item>
            <Dropdown.Item eventKey={2.2}>Another action</Dropdown.Item>
            <Dropdown.Item eventKey={2.3}>Something</Dropdown.Item>
            <Dropdown.Item eventKey={2.4}>Another action</Dropdown.Item>
            <Dropdown.Item eventKey={2.5}>Something</Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item eventKey={2.5}>Separated link</Dropdown.Item>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
