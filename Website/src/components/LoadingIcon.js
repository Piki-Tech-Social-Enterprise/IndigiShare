import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  size: PropTypes.oneOf([
    '',
    'sm',
    'lg'
  ])
};
const defaultProps = {
  size: ''
};
const LoadingIcon = props => {
  const {
    size
  } = props;
  let iconSize = null;
  switch (size) {
    case 'sm':
      iconSize = '';
      break;
    case 'lg':
      iconSize = ' fa-5x';
      break;
    default:
      iconSize = ' fa-3x';
  }
  return (
    <span className={`fa fa-spin fa-spinner${iconSize}`} {...props} />
  );
};

LoadingIcon.propTypes = propTypes;
LoadingIcon.defaultProps = defaultProps;

export default LoadingIcon;
