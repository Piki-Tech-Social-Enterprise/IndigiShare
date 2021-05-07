import React from 'react';
import Routes from '../components/Routes';

const CopyrightYear = props => {
  const {
    text,
    startYear
  } = props;
  const today = new Date();
  const thisYear = today.getFullYear();
  const years = [
    startYear
  ];
  if (thisYear > Number(startYear)) {
    years.push(thisYear);
  }
  return (
    <>
      {text}<br className="d-sm-none" /> &copy; {years.join('-')}
    </>
  );
};
const Footer = () => {
  const {
    REACT_APP_WEB_NAME,
    REACT_APP_WEB_BUILD_VERSION
  } = process.env;
  const {
    termsOfUse,
    privacyPolicy,
    about,
    contact
  } = Routes;
  return (
    <footer className="footer bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2 small">
              <li className="list-inline-item">
                <a href={termsOfUse} className="text-linear-gradient">Terms of Use</a>
              </li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item">
                <a href={privacyPolicy} className="text-linear-gradient">Privacy Policy</a>
              </li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item">
                <a href={about} className="text-linear-gradient">About</a>
              </li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item">
                <a href={contact} className="text-linear-gradient">Contact Us</a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0"><CopyrightYear text={`${REACT_APP_WEB_NAME} v${REACT_APP_WEB_BUILD_VERSION}`} startYear="2020" /></p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="https://facebook.com/IndigiShare" target="_blank" rel="noopener noreferrer" title="IndigiShare on Facebook">
                  <i className="fab fa-facebook fa-2x fa-fw text-linear-gradient"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://linkedin.com/company/IndigiShare" target="_blank" rel="noopener noreferrer" title="IndigiShare on LinkedIn">
                  <i className="fab fa-linkedin fa-2x fa-fw text-linear-gradient"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://twitter.com/IndigiShare" target="_blank" rel="noopener noreferrer" title="IndigiShare on Facebook">
                  <i className="fab fa-twitter-square fa-2x fa-fw text-linear-gradient"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://instagram.com/IndigiShare" target="_blank" rel="noopener noreferrer" title="IndigiShare on Instagram">
                  <i className="fab fa-instagram fa-2x fa-fw text-linear-gradient"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/Piki-Tech-Social-Enterprise/IndigiShare" target="_blank" rel="noopener noreferrer" title="IndigiShare on GitHub">
                  <i className="fab fa-github fa-2x fa-fw text-linear-gradient"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
