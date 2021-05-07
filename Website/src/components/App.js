import React, {
  lazy,
  Suspense
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Routes from './Routes';
import ScrollToTop from './ScrollToTop';
import NavigationBar from './NavigationBar';
import LoadingOverlayModal from './LoadingOverlayModal';
import Footer from './Footer';
import '../assets/scss/indigishare-platform.scss?v=1.0.0';
import '../assets/js/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/js/vendor/fontawesome-free/css/all.min.css';
import '../assets/js/vendor/simple-line-icons/css/simple-line-icons.css';

const {
  home,
  termsOfUse,
  privacyPolicy,
  insights,
  about,
  contact
} = Routes;
const HomePage = lazy(() => import('../pages/Home'));
const TermsOfUsePage = lazy(() => import('../pages/TermsOfUse'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicy'));
const InsightsPage = lazy(() => import('../pages/Insights'));
const AboutPage = lazy(() => import('../pages/About'));
const ContactPage = lazy(() => import('../pages/Contact'));
const Global404Page = lazy(() => import('../pages/Global404Page'));
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavigationBar />
        <Suspense fallback={<LoadingOverlayModal />}>
          <Switch>
            <Route exact path={home}>
              <HomePage />
            </Route>
            <Route exact path={termsOfUse}>
              <TermsOfUsePage />
            </Route>
            <Route exact path={privacyPolicy}>
              <PrivacyPolicyPage />
            </Route>
            <Route exact path={insights}>
              <InsightsPage />
            </Route>
            <Route exact path={about}>
              <AboutPage />
            </Route>
            <Route exact path={contact}>
              <ContactPage />
            </Route>
            <Route>
              <Global404Page />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
