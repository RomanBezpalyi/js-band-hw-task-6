import React from 'react';
import PropTypes from 'prop-types';

const ItemButton = ({ text, handleClick, classNames }) => (
  <button
    type="button"
    onClick={handleClick}
    className={`dropdown-btn ${classNames}`}
  >
    {text}
  </button>
);

ItemButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  classNames: PropTypes.string.isRequired,
};

export default ItemButton;
