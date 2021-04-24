import React, {
  useState
} from 'react';
import {
  NavLink
} from 'react-router-dom';
import {
  useWindowEvent
} from 'components/App/Utilities';
import AuthNavbarLinks from '../Navbars/AuthNavbarLinks';
import isLogo from 'assets/img/islogo-760x760.png';

const AuthSidebar = props => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const activeRoute = routeName => {
    return props.location.pathname.indexOf(routeName) > -1 && 'active';
  };
  const updateDimensions = () => {
    setWindowInnerWidth(window.innerWidth);
  };
  useWindowEvent('resize', updateDimensions);
  const sidebarBackground = {
    backgroundImage: "url(" + props.image + ")"
  };
  const {
    REACT_APP_PWA_NAME
  } = process.env;
  return (
    <div id="sidebar" className="sidebar" data-color={props.color} data-image={props.image}>
      <div className="sidebar-background" style={sidebarBackground} />
      <div className="logo">
        <div className="logo-img">
          <img src={isLogo} alt="logo_image" style={{
            width: '34px'
          }} />
        </div>
        <span className="h5">{REACT_APP_PWA_NAME}</span>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {windowInnerWidth <= 991 ? <AuthNavbarLinks /> : null}
          {props.routes.map((prop, key) => {
            if (!prop.redirect && prop.layout === '/auth')
              return (
                <li className={activeRoute(prop.layout + prop.path)} key={key} style={{
                  width: '100%'
                }}>
                  <NavLink to={prop.layout + prop.path} className="nav-link" activeClassName="active">
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}

export default AuthSidebar;
