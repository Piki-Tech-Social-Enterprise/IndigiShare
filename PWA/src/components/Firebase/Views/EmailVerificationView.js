import React, {
  useState
} from 'react';
import {
  Container,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';
import {
  withFirebase
} from '../Contexts/firebaseContext';
import CopyrightInfomation from '../../App/CopyrightInfomation';

const ConfirmationSection = props => (
  <>
    <h3>{props.title}</h3>
    <h5>Check your emails (Spam/Junk folder included) for a confirmation email. {props.details}</h5>
  </>
);
const EmailVerificationView = props => {
  const [isSent, setIsSent] = useState(false);
  const [title, setTitle] = useState('Verify your email');
  const [details, setDetails] = useState('Or send another confirmation email.');
  const handleSendConfirmationEmailClick = async () => {
    await props.firebase
      .sendEmailVerification()
      .then(() => {
        setTitle('Confirmation Sent');
        setDetails('Refresh this page once you confirmed your email.');
        setIsSent(true);
      });
  };
  return (
    <div className="page-header clear-filter">
      <div
        className="page-header-image"
        style={{
          backgroundImage: `url(${require('assets/img/fern-2000x1121.jpg')})`
        }}
      ></div>
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto py-3 py-lg-5" md="8">
            <div className="p-3 login-view">
              <Card className="no-transition bg-panel text-center">
                <CardHeader className="pb-0">
                  <h2>{process.env.REACT_APP_PWA_NAME} Email Verification</h2>
                </CardHeader>
                <CardBody className="pt-0">
                  <ConfirmationSection title={title} details={details} />
                  <Button type="button" block className="mt-4 bg-success text-white" onClick={handleSendConfirmationEmailClick} disabled={isSent}>
                    Send confirmation Email
                  </Button>
                  <div className="mt-3">
                    <CopyrightInfomation />
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default withFirebase(EmailVerificationView);
