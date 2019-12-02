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
    handleUpdateClick(doneTodo.id, doneTodo);
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
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
          type="button"
        >
          ...
        </button>
        <ul
          className="dropdown-menu dropdown-list"
          aria-labelledby="dropdownMenu1"
        >
          <li>
            <ItemButton
              handleClick={this.handleDone}
              text={todo.isDone ? 'Open' : 'Done'}
              classNames="btn btn-success"
            />
          </li>
          <li>
            <ItemButton
              handleClick={this.handleEdit}
              text="Edit"
              classNames="btn btn-warning"
            />
          </li>
          <li>
            <ItemButton
              handleClick={this.handleDelete}
              text="Delete"
              classNames="btn btn-danger"
            />
          </li>
        </ul>
      </div>
    );
  }
}
