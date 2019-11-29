import React from 'react';
import PropTypes from 'prop-types';
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown';

const TodoItem = ({
  todo,
  handleUpdateClick,
  handleDeleteClick,
  handleEditClick,
  setSelectedId,
}) => (
  <section className={todo.isDone ? '1' : '2'}>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <div>
      <span>{todo.priority}</span>
      <ButtonDropdown
        handleUpdateClick={handleUpdateClick}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        setSelectedId={setSelectedId}
        todo={todo}
      />
    </div>
  </section>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  handleUpdateClick: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};

export default TodoItem;
