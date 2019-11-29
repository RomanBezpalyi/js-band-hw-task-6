import React from 'react';
import PropTypes from 'prop-types';
import ProgressSelect from './ProgressSelect/ProgressSelect';
import PrioritySelect from './PrioritySelect/PrioritySelect';

const Form = ({ title, priority, progress, handleOpenModal, handleChange }) => (
  <form>
    <input name="title" value={title} type="text" onChange={handleChange} />
    <ProgressSelect value={progress} handleChange={handleChange} />
    <PrioritySelect value={priority} handleChange={handleChange} />
    <button type="button" onClick={handleOpenModal}>
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
