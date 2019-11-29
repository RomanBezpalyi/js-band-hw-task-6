import React from 'react';
import PropTypes from 'prop-types';
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown';

const TodoItem = ({ title, description, priority, isDone }) => (
  <section className={isDone ? '1' : '2'}>
    <h3>{title}</h3>
    <p>{description}</p>
    <div>
      <span>{priority}</span>
      <ButtonDropdown />
    </div>
  </section>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export default TodoItem;
