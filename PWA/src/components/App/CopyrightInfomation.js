import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

const AuthFooterLink = props => {
  const {
    to,
    title,
    text
  } = props;
  return (
    <Link to={to} title={title}>{text}</Link>
  );
};
const AuthPrivacyLink = () => {
  return (
    <AuthFooterLink to="/public/PrivacyPolicy" title="Privacy Policy" text="Privacy" />
  );
};
const AuthTermsLink = () => {
  return (
    <AuthFooterLink to="/public/TermsOfUse" title="Terms of Use" text="Terms" />
  );
};
const GitHubLink = () => {
  return (
    <a href="https://github.com/Piki-Tech-Social-Enterprise/IndigiShare" target="_blank" rel="noopener noreferrer" title="IndigiShare on GitHub">
      <FontAwesomeIcon icon={['fab', 'github']} color="default" />
    </a>
  );
};
const CopyrightInfomation = () => {
  const {
    REACT_APP_PWA_NAME,
    REACT_APP_PWA_BUILD_VERSION
  } = process.env;
  const thisYear = 1900 + new Date().getYear();
  return (
    <div className="copyright">
      {REACT_APP_PWA_NAME} v{REACT_APP_PWA_BUILD_VERSION} &copy; {thisYear} <AuthPrivacyLink /> &amp; <AuthTermsLink />&nbsp;<GitHubLink />
    </div>
  )
}

export default CopyrightInfomation
