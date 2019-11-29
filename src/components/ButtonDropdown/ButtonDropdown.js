import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemButton from '../ItemButton/ItemButton';

export default class ButtonDropdown extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      isDone: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
    handleUpdateClick: PropTypes.func.isRequired,
    handleEditClick: PropTypes.func.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
    setSelectedId: PropTypes.func.isRequired,
  };

  handleDone = () => {
    const { todo, handleUpdateClick } = this.props;
    const doneTodo = { ...todo, isDone: !todo.isDone };
    handleUpdateClick(doneTodo);
  };

  handleEdit = () => {
    const { todo, handleEditClick, setSelectedId } = this.props;
    handleEditClick(todo);
    setSelectedId(todo.id);
  };

  handleDelete = () => {
    const { todo, handleDeleteClick } = this.props;
    handleDeleteClick(todo.id);
  };

  render() {
    const { todo } = this.props;
    return (
      <div>
        <span>...</span>
        <div>
          <ItemButton
            handleClick={this.handleDone}
            text={todo.isDone ? 'Open' : 'Done'}
          />
          <ItemButton handleClick={this.handleEdit} text="Edit" />
          <ItemButton handleClick={this.handleDelete} text="Delete" />
        </div>
      </div>
    );
  }
}
