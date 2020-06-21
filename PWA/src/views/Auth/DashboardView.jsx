import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import withAuthorization from 'components/Firebase/HighOrder/withAuthorization';

const DashboardView = props => {
  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col className="pt-0 pb-3 px-3">
            <h3>Nau mai, haere mai <b className="bg-success text-white py-0 px-2">{props.authUser && props.authUser.displayName}</b> kī IndigiShare.</h3>
            <p>
              The place where you get sh!t done so let's go...
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const condition = authUser => !!authUser && !!authUser.active;

export default withAuthorization(condition)(DashboardView);
