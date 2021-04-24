import React, {
  useState
} from 'react';
import {
  AuthUserContext,
  withFirebase
} from 'components/Firebase';
import {
  compose
} from 'recompose';
import {
  withRouter,
  Redirect
} from 'react-router-dom';
import {
  Card,
  Form,
  CardHeader,
  CardBody,
  Input,
  CardFooter,
  Button
} from 'reactstrap';
import SweetAlert from 'sweetalert2-react';
import isLogo from 'assets/img/islogo-760x760.png';

const LoginView = props => {
  const defaultDisplayTitle = 'Login Failed';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState(defaultDisplayTitle);
  const [show, setShow] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    let displayTitle = defaultDisplayTitle;
    let displayMessage = '';
    if (!email || !password) {
      displayMessage = 'Email and Password are required fields.';
    } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      displayMessage = 'Email is invalid.';
    } else if (!password.match(/(?:(?:(?=.*?[0-9])(?=.*?[-!@#$%&*ˆ+=_])|(?:(?=.*?[0-9])|(?=.*?[A-Z])|(?=.*?[-!@#$%&*ˆ+=_])))|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-!@#$%&*ˆ+=_]))[A-Za-z0-9-!@#$%&*ˆ+=_]{6,15}/)) {
      displayMessage = 'Password is too weak. Needs to be 6 characters or more. It can be any combination of letters, numbers, and symbols (ASCII characters).';
    } else {
      try {
        setIsSubmitting(true);
        await props.firebase.signInWithEmailAndPassword(email, password);
        props.history.push('/auth/Dashboard');
        setIsSubmitting(false);
      } catch (error) {
        displayMessage = error.message;
      }
    }
    if (displayMessage) {
      setSweetAlertStates(true, displayMessage, displayTitle, true);
    }
  };
  const setSweetAlertStates = (isSubmitting = false, text = '', title = '', show = false) => {
    setIsSubmitting(isSubmitting);
    setText(text);
    setTitle(title);
    setShow(show);
  };
  const {
    REACT_APP_PWA_NAME,
    REACT_APP_PWA_BUILD_VERSION
  } = process.env;
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser && !!authUser.active
          ? <Redirect to="/auth/Dashboard" />
          : <div className="login-view bg-panel text-center">
            <Card className="card-login card-plain m-auto py-3">
              <Form className="form" onSubmit={handleSubmit} noValidate>
                <CardHeader className="text-center">
                  <div className="logo-container">
                    <img alt={`${REACT_APP_PWA_NAME}`} src={isLogo} />
                  </div>
                  {REACT_APP_PWA_NAME} v{REACT_APP_PWA_BUILD_VERSION}
                </CardHeader>
                <CardBody className="pb-0">
                  <Input
                    className="my-3 bg-transparent"
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    onChange={async e => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <Input
                    className="my-3 bg-transparent"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={async e => setPassword(e.target.value)}
                    disabled={isSubmitting}
                  />
                </CardBody>
                <CardFooter className="text-center pt-0">
                  <Button
                    block
                    className="my-2 bg-success text-white"
                    color="success"
                    size="md"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                  <Button
                    block
                    className="my-2 bg-primary text-white"
                    color="primary"
                    size="md"
                    type="button"
                    href="/public/Register"
                    disabled={isSubmitting}
                  >
                    Register?
                  </Button>
                </CardFooter>
                <SweetAlert show={show} title={title} text={text} onConfirm={() => setSweetAlertStates()} />
              </Form>
            </Card>
          </div>
      }
    </AuthUserContext.Consumer>
  );
};

export default compose(
  withRouter,
  withFirebase
)(LoginView);
