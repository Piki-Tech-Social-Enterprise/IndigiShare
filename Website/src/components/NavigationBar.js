import React, {
  useState,
  createRef
} from 'react';
import isLogo from '../assets/img/islogo-760x760.png';
import hacktheCrisisNZLogo from '../assets/img/HacktheCrisisNZ_Logo Green.png';

const NavagationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = createRef();
  const navRef = createRef();
  const handleMenuOverlayOnClick = async e => {
    e.preventDefault();
    menuRef.current.classList.toggle('clicked');
    navRef.current.classList.toggle('show');
    setShowMenu(!showMenu);
  };
  const {
    REACT_APP_WEB_NAME
  } = process.env;
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container-fluid text-center">
        <a className="navbar-brand" href="/">
          <img src={isLogo} height="30" className="d-inline-block align-top" alt={REACT_APP_WEB_NAME} />
          &nbsp;{REACT_APP_WEB_NAME}
        </a>
        <span className="d-none d-lg-inline-block">
          &nbsp;#IndigiShare
        </span>
        <a className="mx-sm-auto d-none d-sm-inline-block" href="https://facebook.com/hackthecrisisNZ" target="_blank" rel="noopener noreferrer">
          <img alt="Hack the Crisis NZ 2020" src={hacktheCrisisNZLogo} style={{
            height: '50px'
          }} />
          <span className="d-none d-lg-inline-block" style={{
            color: 'initial'
          }}>
            &nbsp;&nbsp;&nbsp;#HacktheCrisisNZ
          </span>
        </a>
        <div className="menu" ref={menuRef} onClick={handleMenuOverlayOnClick}>
          <span />
        </div>
        <nav id="nav" ref={navRef}>
          <ul className="main text-right">
            <li><a href="/Insights">Insights</a></li>
          </ul>
        </nav>
        <div className="overlay" onClick={handleMenuOverlayOnClick} />
      </div>
    </nav>
  );
};

export default NavagationBar;
