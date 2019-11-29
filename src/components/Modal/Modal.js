import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  title,
  description,
  priority,
  handleChange,
  handleSubmit,
  handleClose,
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="textLabel">
      Title:
      <input
        id="textLabel"
        name="title"
        value={title}
        type="text"
        placeholder="Title"
        onChange={handleChange}
      />
    </label>
    <label htmlFor="textareaLabel">
      Description:
      <textarea
        rows="5"
        id="textaresLabel"
        value={description}
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
    </label>
    <label htmlFor="selectLabel">
      Priority:
      <select
        id="selectLabel"
        value={priority}
        onChange={handleChange}
        name="priority"
      >
        <option value="High">High</option>
        <option value="Normal">Normal</option>
        <option value="Low">Low</option>
      </select>
    </label>
    <div>
      <button type="submit">Save</button>
      <button type="button" onClick={handleClose}>
        Cancel
      </button>
    </div>
  </form>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Modal;
