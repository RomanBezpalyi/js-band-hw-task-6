import React from 'react';
// import PropTypes from 'prop-types';
import ProgressSelect from './ProgressSelect/ProgressSelect';
import PrioritySelect from './PrioritySelect/PrioritySelect';

const Form = () => (
  <form>
    <input type="text" value={1} />
    <ProgressSelect />
    <PrioritySelect />
    <button type="button">Create</button>
  </form>
);

export default Form;
