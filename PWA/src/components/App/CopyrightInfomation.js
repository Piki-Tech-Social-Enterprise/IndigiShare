import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

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
  return (
    <div className="copyright">
      <CopyrightYear text={`${REACT_APP_PWA_NAME} v${REACT_APP_PWA_BUILD_VERSION}`} startYear="2020" /> <AuthPrivacyLink /> &amp; <AuthTermsLink />&nbsp;<GitHubLink />
    </div>
  )
}

export default CopyrightInfomation
