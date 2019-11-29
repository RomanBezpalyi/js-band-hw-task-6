import React from 'react';
import PropTypes from 'prop-types';

const ItemButton = ({ text, handleClick }) => (
  <button type="button" onClick={handleClick}>
    {text}
  </button>
);

ItemButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ItemButton;
