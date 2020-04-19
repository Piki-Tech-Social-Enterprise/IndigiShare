import React from 'react';
import {
  Grid
} from 'react-bootstrap';
import CopyrightInfomation from 'components/App/CopyrightInfomation';

const AuthFooter = () => {
  return (
    <footer className="footer">
      <Grid fluid>
        <CopyrightInfomation />
      </Grid>
    </footer>
  );
};

export default AuthFooter;
