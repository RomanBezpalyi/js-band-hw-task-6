import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({
  todos,
  handleUpdateClick,
  handleEditClick,
  handleDeleteClick,
  setSelectedId,
}) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          todo={todo}
          handleUpdateClick={handleUpdateClick}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          setSelectedId={setSelectedId}
        />
      </li>
    ))}
  </ul>
);

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  handleUpdateClick: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};

export default TodoList;
