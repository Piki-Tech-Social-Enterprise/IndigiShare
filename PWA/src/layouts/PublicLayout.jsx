import React, {
  useEffect,
  Suspense
} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  Container,
  Col
} from 'reactstrap';
import routes from 'routes.js';
import LoadingOverlayModal from 'components/App/LoadingOverlayModal';

const PublicLayout = props => {
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/public") {
        // console.log(`prop: ${JSON.stringify(prop)}`);
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
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
    }
  }, [props]);
  return (
    <div className="page-header clear-filter">
      <div
        className="page-header-image"
        style={{
          backgroundImage: `url(${require('assets/img/fern-2000x1121.jpg')})`
        }}
      ></div>
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto py-3 py-lg-5" md="8">
            <div className="p-3">
              <Switch>
                <Suspense fallback={<LoadingOverlayModal />}>
                  {getRoutes(routes)}
                </Suspense>
              </Switch>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default PublicLayout;
