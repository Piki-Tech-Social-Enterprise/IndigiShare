import React from 'react';

const PrivacyPolicyView = () => {
  const {
    REACT_APP_PWA_NAME,
    REACT_APP_PWA_EMAIL
  } = process.env;
  return (
    <div className="p-3 bg-panel privacy-policy">
      <div className="logo-container">
        <img alt={`${REACT_APP_PWA_NAME}`} src={require('assets/img/islogo-760x760.png')} />
      </div>
      <h3>PRIVACY POLICY</h3>
      <p>We collect personal information from you, including information about your:</p>
      <ul>
        <li>Display Name</li>
        <li>Email Address</li>
      </ul>
      <p>We collect your personal information in order to:</p>
      <ul>
        <li>Send newsletter emails</li>
      </ul>
      <p>Providing some information is optional. If you choose not to enter your full name &amp; email address, we cannot send you emails.</p>
      <p>We keep your information safe by using a secure connection and transmission of data and only allowing certain staff to access it.</p>
      <p>We keep your information for five years at which point we securely destroy it by securely erasing all digital copies.</p>
      <p>You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you’d like to ask for a copy of your information, or to have it corrected, please contact us at <a href={`mailto:${REACT_APP_PWA_EMAIL}?subject=Privacy Policy`}>{REACT_APP_PWA_EMAIL}</a></p>
      <a type="button" href="/auth/Dashboard" class="my-2 bg-primary text-white btn btn-primary btn-md btn-block">Back</a>
    </div>
  );
};

export default PrivacyPolicyView;
