import React from 'react';
import PropTypes from 'prop-types';
import ProgressSelect from './ProgressSelect/ProgressSelect';
import PrioritySelect from './PrioritySelect/PrioritySelect';

const Form = ({ title, priority, progress, handleOpenModal, handleChange }) => (
  <form className="form-inline container form">
    <input
      className="form-control col-xs-6 col-md-3"
      name="title"
      value={title}
      type="text"
      onChange={handleChange}
    />
    <ProgressSelect value={progress} handleChange={handleChange} />
    <PrioritySelect value={priority} handleChange={handleChange} />
    <button
      className="btn btn-primary col-xs-6 col-sm-4 col-md-1"
      type="button"
      onClick={handleOpenModal}
    >
      Create
    </button>
  </form>
);

Form.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form;
