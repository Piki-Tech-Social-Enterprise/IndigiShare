import React, {
  useState,
  createRef
} from 'react';

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
    REACT_APP_WEB_NAME,
    REACT_APP_PWA_BASE_URL
  } = process.env;
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container text-center">
        <a className="navbar-brand" href="/">
          <img src={require('../assets/img/islogo-760x760.png')} height="30" className="d-inline-block align-top" alt={REACT_APP_WEB_NAME} />
          &nbsp;{REACT_APP_WEB_NAME}
        </a>
        <span className="d-none d-lg-inline-block">
          &nbsp;#IndigiShare
        </span>
        <a className="mx-sm-auto" href="https://www.hackthecrisis.nz" target="_blank" rel="noopener noreferrer">
          <img alt="Hack the Crisis NZ 2020" src={require('../assets/img/HacktheCrisisNZ_Logo Green.png')} style={{
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
            <li><a href={`${REACT_APP_PWA_BASE_URL}/public/Login`} target="_blank" rel="noopener noreferrer">Register/Login</a></li>
            <li><a href="/Insights">Insights</a></li>
          </ul>
        </nav>
        <div className="overlay" onClick={handleMenuOverlayOnClick} />
      </div>
    </nav>
  );
};

export default NavagationBar;
