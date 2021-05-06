import React, {
  useEffect
} from 'react';
import {
  withRouter
} from 'react-router-dom';

const ScrollToTop = props => {
  const {
    history
  } = props;
  useEffect(() => {
    const listener = history.listen(() => window.scrollTo(0, 0));
    return () => listener();
  });
  return (
    <>
    </>
  );
}

export default withRouter(ScrollToTop);
