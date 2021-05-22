import React, {
  useState
} from 'react';
import {
  Navbar
} from 'react-bootstrap';
// import AuthNavbarLinks from './AuthNavbarLinks';

const AuthNavbar = props => {
  const [sidebarExists, setSidebarExists] = useState(false);
  const mobileSidebarToggle = async e => {
    e.preventDefault();
    if (!sidebarExists) {
      setSidebarExists(!sidebarExists);
    }
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };
  const handleLogoutOnClick = async e => {
    e.preventDefault();
    await props.firebase.signOut();
  };
  return (
    <Navbar>
      <Navbar.Brand>
        <a href={window.location.href}>{props.brandText}</a>
      </Navbar.Brand>
      <Navbar.Toggle onClick={mobileSidebarToggle} />
      {/* <Navbar.Collapse>
        <AuthNavbarLinks />
      </Navbar.Collapse> */}
      <div className="ml-auto">
        <a href="#InddigiShare" onClick={handleLogoutOnClick}>Logout</a>
      </div>
    </Navbar >
  );
}

export default AuthNavbar;
