import React from 'react';
import propTypes from 'prop-types';

const Header = ({ message }) => {
  return (
    <div>
      <h2 className = "Header text-center">
        {message}
      </h2>
    </div>
  );
};

Header.propTypes = {
  message: propTypes.string.isRequired
};

Header.defaultProps = {
  message: 'Default Value'
};

export default Header;