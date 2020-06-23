import React from 'react';
import {
  Container
} from 'react-bootstrap';
import CopyrightInfomation from 'components/App/CopyrightInfomation';

const AuthFooter = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <CopyrightInfomation />
      </Container>
    </footer>
  );
};

export default AuthFooter;
