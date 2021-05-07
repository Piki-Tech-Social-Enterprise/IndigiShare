import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const PrivacyPolicy = () => {
  const {
    REACT_APP_WEB_EMAIL
  } = process.env;
  return (
    <Container className="my-5" fluid>
      <Row>
        <Col xs={12}>
          <h1 className="p-5 bg-linear-gradient text-white text-center">Privacy Policy</h1>
          <p>We collect personal information from you, including information about your:</p>
          <ul>
            <li>Email Address</li>
          </ul>
          <p>We collect your personal information in order to:</p>
          <ul>
            <li>Send newsletter emails</li>
          </ul>
          <p>Providing some information is optional. If you choose not to enter your full name &amp; email address, we cannot send you emails.</p>
          <p>We keep your information safe by using a secure connection and transmission of data and only allowing certain staff to access it.</p>
          <p>We keep your information for five years at which point we securely destroy it by securely erasing all digital copies.</p>
          <p>You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you’d like to ask for a copy of your information, or to have it corrected, please contact us at <a href={`mailto:${REACT_APP_WEB_EMAIL}?subject=Privacy Policy`}>{REACT_APP_WEB_EMAIL}</a></p>
        </Col>
      </Row>
    </Container>
  )
}

export default PrivacyPolicy;
