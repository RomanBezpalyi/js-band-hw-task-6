import React, { Component, createRef } from 'react';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import Modal from '../Modal/Modal';
import filterTodos from '../../helpers/filterTodos';
import putTodoToEditMode from '../../helpers/putTodoToEditMode';

export default class Dashboard extends Component {
  backdropRef = createRef();

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          title: 'qwe',
          description: 'qwe',
          priority: 'High',
          isDone: true,
          id: 'shortid(',
        },
        {
          title: 'qwe',
          description: 'qwe',
          priority: 'High',
          isDone: true,
          id: 'shortid();',
        },
        {
          title: 'qwec',
          description: 'qwe',
          priority: 'Low',
          isDone: true,
          id: 'shortijkd()',
        },
        {
          title: 'qe',
          description: 'qwe',
          priority: 'Low',
          isDone: false,
          id: 'short',
        },
        {
          title: 'qwert',
          description: 'qwe',
          priority: 'High',
          isDone: false,
          id: 'sdfhortid()',
        },
      ],
      isModalOpen: false,
      selectedTodoId: null,
      searchForm: {
        title: '',
        priority: 'All',
        progress: 'All',
      },
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmout() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  // FORM

  handleSearchInputChange = ({ target: { value, name } }) =>
    this.setState(state => ({
      searchForm: { ...state.searchForm, [name]: value },
    }));

  // TODO LIST

  handleUpdateClick = todo => {
    const { id } = todo;
    this.setState(state => ({
      todos: [...state.todos.filter(task => task.id !== id), todo],
    }));
  };

  handleEditClick = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  handleDeleteClick = id =>
    this.setState(state => ({
      todos: [...state.todos.filter(todo => todo.id !== id)],
    }));

  setSelectedId = id => this.setState({ selectedTodoId: id });

  // MODAL

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.handleCloseModal();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.handleCloseModal();
  };

  handleAddTodo = todo =>
    this.setState(state => ({ todos: [...state.todos, todo] }));

  handleUpdateTodo = (id, todo) => {
    this.setState(state => ({
      todos: [...state.todos.filter(task => task.id !== id), todo],
      selectedTodoId: null,
    }));
  };

  render() {
    const { isModalOpen, todos, searchForm, selectedTodoId } = this.state;
    const { title, priority, progress } = searchForm;
    const todosToRender = filterTodos(todos, title, priority, progress);
    const todoInEditMode = putTodoToEditMode(todos, selectedTodoId);

    return (
      <main>
        <Form
          title={title}
          priority={priority}
          progress={progress}
          handleOpenModal={this.handleOpenModal}
          handleChange={this.handleSearchInputChange}
        />
        <TodoList
          todos={todosToRender}
          handleUpdateClick={this.handleUpdateClick}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick}
          setSelectedId={this.setSelectedId}
        />
        {isModalOpen && (
          <div
            className="backdrop"
            ref={this.backdropRef}
            onClick={this.handleBackdropClick}
            role="button"
          >
            <Modal
              handleClose={this.handleCloseModal}
              handleAdd={this.handleAddTodo}
              handleUpdate={this.handleUpdateTodo}
              todoInEditMode={todoInEditMode}
            />
          </div>
        )}
      </main>
    );
  }
}
