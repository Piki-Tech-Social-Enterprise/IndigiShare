import React, {
  useState,
  createRef
} from 'react';
import isLogo from '../assets/img/islogo-760x760.png';
// import hacktheCrisisNZLogo from '../assets/img/HacktheCrisisNZ_Logo White.png';
import Routes from './Routes';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

const {
  home,
  insights,
  about,
  contact
} = Routes;
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
  const [showPledgeMePopup, setShowPledgeMePopup] = useState(false);
  const handleShowPledgeMePopupToggle = () => setShowPledgeMePopup(!showPledgeMePopup);
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container-fluid text-center">
        <a className="navbar-brand text-linear-gradient" href="/">
          <img src={isLogo} height="30" className="d-inline-block align-top" alt={REACT_APP_WEB_NAME} />
          &nbsp;{REACT_APP_WEB_NAME}
        </a>
        <span className="d-none d-lg-inline-block">
          &nbsp;#IndigiShare
        </span>
        <Button className="mx-auto activate-indigishare-today-button" color="success" onClick={handleShowPledgeMePopupToggle} outline><span className="text-linear-gradient">Activate IndigiShare Today!</span></Button>
        <Modal isOpen={showPledgeMePopup} toggle={handleShowPledgeMePopupToggle} returnFocusAfterClose={false} style={{
          maxWidth: '370px'
        }}>
          <ModalHeader toggle={handleShowPledgeMePopupToggle}>Help paddle the IndigiShare waka...</ModalHeader>
          <ModalBody>
            <i>Checkout our rewards by going to our PledgeMe Campaign page below.</i>
            <iframe
              title="IndigiShare PledgeMe Campaign 2021"
              src="https://pledgeme.co.nz/projects/6984-indigishare-crowdfund-raise/embed_card"
              // src="https://pledgeme.co.nz/projects/6984-indigishare-crowdfund-raise/embed_video_card"
              frameBorder="0"
              scrolling="no"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '555px',
                border: 'none'
              }}
            />
          </ModalBody>
        </Modal>
        {/* <a className="mx-sm-auto d-none d-sm-inline-block" href="https://facebook.com/hackthecrisisNZ" target="_blank" rel="noopener noreferrer">
          <img alt="Hack the Crisis NZ 2020" src={hacktheCrisisNZLogo} className="bg-linear-gradient" style={{
            height: '50px'
          }} />
          <span className="d-none d-lg-inline-block" style={{
            color: 'initial'
          }}>
            &nbsp;&nbsp;&nbsp;#HacktheCrisisNZ
          </span>
        </a> */}
        <div className="menu" ref={menuRef} onClick={handleMenuOverlayOnClick}>
          <span />
        </div>
        <nav id="nav" className="bg-linear-gradient" ref={navRef}>
          <ul className="main text-right">
            <li><a href={home}>Home</a></li>
            <li><a href={insights}>Insights</a></li>
            <li><a href={about}>About</a></li>
            <li><a href={contact}>Contact Us</a></li>
          </ul>
        </nav>
        <div className="overlay" onClick={handleMenuOverlayOnClick} />
      </div>
    </nav>
  );
};

export default NavagationBar;
