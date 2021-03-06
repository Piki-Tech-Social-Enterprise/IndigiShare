import React from 'react';

const TermsOfUseView = () => {
  const {
    REACT_APP_PWA_NAME,
    REACT_APP_PWA_EMAIL
  } = process.env;
  return (
    <div className="p-3 bg-panel terms-of-use">
      <div className="logo-container">
        <img alt={`${REACT_APP_PWA_NAME}`} src={require('assets/img/islogo-760x760.png')} />
      </div>
      <h3>TERMS OF USE ("Terms")</h3>
      <p>Last updated: 19 April 2020</p>
      <h5>Overview</h5>
      <p>Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the [Email] website (the "Service") operated by Te Rangihakahaka ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
      <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
      <h5>General</h5>
      <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
      <h5>Termination</h5>
      <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
      <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
      <h5>Links To Other Web Sites</h5>
      <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Te Rangihakahaka.</p>
      <p>Te Rangihakahaka has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Te Rangihakahaka shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance</p>
      <h5>Changes</h5>
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      <h5>Contact Us</h5>
      <p>If you have any questions about these Terms, please contact us at <a href={`mailto:${REACT_APP_PWA_EMAIL}?subject=Terms of Use`}>{REACT_APP_PWA_EMAIL}</a></p>
      <a type="button" href="/auth/Dashboard" class="my-2 bg-primary text-white btn btn-primary btn-md btn-block">Back</a>
    </div>
  );
};

export default TermsOfUseView;
