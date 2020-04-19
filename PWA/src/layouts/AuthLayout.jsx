import React, {
  createRef,
  useEffect,
  Suspense
} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import AuthSidebar from 'components/Sidebar/AuthSidebar';
import AuthNavbar from 'components/Navbars/AuthNavbar';
import AuthFooter from 'components/Footer/AuthFooter';
import { style } from 'variables/Variables.jsx';
import routes from 'routes.js';
import image from 'assets/img/fern-200x673.jpg';
import LoadingOverlayModal from 'components/App/LoadingOverlayModal';
import {
  compose
} from 'recompose';
import withAuthentication from 'components/Firebase/HighOrder/withAuthentication';
// import withEmailVerification from 'components/Firebase/HighOrder/withEmailVerification';
import withAuthorization from 'components/Firebase/HighOrder/withAuthorization';

const AuthLayout = props => {
  const notificationSystemRef = createRef();
  const mainPanelRef = createRef();
  const getLevel = color => {
    let level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    return level;
  };
  const createTitle = () => {
    return (
      <span data-notify="icon" className="pe-7s-gift" />
    );
  };
  const createMessage = () => {
    return (
      <div>
        Nau mai, haere mai kī <b>{process.env.REACT_APP_PWA_NAME}</b> - a beautiful freebie for every web developer.
      </div>
    );
  };
  const createNotification = (title, message, level, position, autoDismiss) => {
    return {
      title: title,
      message: message,
      level: level,
      position: position,
      autoDismiss: autoDismiss
    };
  };
  const createDefaultNotification = (position) => {
    const title = createTitle();
    const message = createMessage();
    const level = getLevel(Math.floor(Math.random() * 4 + 1));
    const autoDismiss = 15;
    return createNotification(title, message, level, position, autoDismiss)
  };
  const handleNotificationClick = position => {
    notificationSystemRef.current.addNotification(createDefaultNotification(position));
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        // console.log(`prop: ${JSON.stringify(prop)}`);
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  useEffect(() => {
    if (
      window.innerWidth < 993 &&
      props.history.location.pathname !== props.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (props.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainPanelRef.current.scrollTop = 0;
    }
  }, [props, mainPanelRef]);
  return (
    <div className="wrapper">
      <NotificationSystem ref={notificationSystemRef} style={style} />
      <AuthSidebar {...props} routes={routes} image={image} color="black" />
      <div className="main-panel" ref={mainPanelRef}>
        <AuthNavbar {...props} brandText={getBrandText(props.location.pathname)} />
        <Switch>
          <Suspense fallback={<LoadingOverlayModal />}>
            {getRoutes(routes)}
          </Suspense>
        </Switch>
        <AuthFooter />
      </div>
    </div>
  );
};

const condition = authUser => !!authUser && !!authUser.active;

export default compose(
  withAuthentication,
  // withEmailVerification,
  withAuthorization(condition)
)(AuthLayout);
