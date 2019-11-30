import React from 'react';
import PropTypes from 'prop-types';

const PrioritySelect = ({ value, handleChange }) => (
  <select
    name="priority"
    className="form-control col-xs-6 col-md-3"
    value={value}
    onChange={handleChange}
  >
    <option value="All">All</option>
    <option value="High">High</option>
    <option value="Normal">Normal</option>
    <option value="Low">Low</option>
  </select>
);

PrioritySelect.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PrioritySelect;
