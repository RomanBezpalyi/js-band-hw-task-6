import React from 'react';
// import PropTypes from 'prop-types';

const Modal = () => (
  <form>
    <label htmlFor="textLabel">
      Title:
      <input id="textLabel" name="title" type="text" placeholder="Title" />
    </label>
    <label htmlFor="textareaLabel">
      Description:
      <textarea
        rows="5"
        id="textaresLabel"
        name="description"
        placeholder="Description"
      />
    </label>
    <label htmlFor="selectLabel">
      Priority:
      <select id="selectLabel">
        <option value="High">High</option>
        <option value="Normal">Normal</option>
        <option value="Low">Low</option>
      </select>
    </label>
    <div>
      <button type="submit">Save</button>
      <button type="button">Cancel</button>
    </div>
  </form>
);

export default Modal;
