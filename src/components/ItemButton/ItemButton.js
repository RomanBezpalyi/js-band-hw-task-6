import React from 'react';
import PropTypes from 'prop-types';

const ItemButton = ({ text }) => <button type="button">{text}</button>;

ItemButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ItemButton;
