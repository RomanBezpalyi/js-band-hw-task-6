import React, { Component, createRef } from 'react';
import shortid from 'shortid';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import Modal from '../Modal/Modal';
import filterTodos from '../../helpers/filterTodos';

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
          id: shortid(),
        },
        {
          title: 'qwe',
          description: 'qwe',
          priority: 'High',
          isDone: true,
          id: shortid(),
        },
        {
          title: 'qwec',
          description: 'qwe',
          priority: 'Low',
          isDone: true,
          id: shortid(),
        },
        {
          title: 'qe',
          description: 'qwe',
          priority: 'Low',
          isDone: false,
          id: shortid(),
        },
        {
          title: 'qwert',
          description: 'qwe',
          priority: 'High',
          isDone: false,
          id: shortid(),
        },
      ],
      isModalOpen: false,
      selectedTodoId: null,
      modalForm: {
        title: '',
        description: '',
        priority: 'Low',
        isDone: false,
      },
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

  handleEditClick = todo => {
    const { title, description, priority, isDone } = todo;
    this.setState({
      isModalOpen: true,
      modalForm: { title, description, priority, isDone },
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
    this.resetCreateForm();
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

  handleCreateInputChange = ({ target: { value, name } }) =>
    this.setState(state => ({
      modalForm: { ...state.modalForm, [name]: value },
    }));

  handleSubmit = e => {
    e.preventDefault();
    const { selectedTodoId } = this.state;
    const { title, description, priority, isDone } = this.state.modalForm;
    const todo = { title, description, priority, isDone };
    if (selectedTodoId) {
      todo.id = selectedTodoId;
      this.handleUpdateTodo(selectedTodoId, todo);
      this.setState({ selectedTodoId: null });
    } else {
      todo.id = shortid();
      this.setState(state => ({ todos: [...state.todos, todo] }));
    }
    this.handleCloseModal();
  };

  handleUpdateTodo = (id, todo) => {
    this.setState(state => ({
      todos: [...state.todos.filter(task => task.id !== id), todo],
    }));
  };

  resetCreateForm = () =>
    this.setState({
      modalForm: { title: '', description: '', priority: 'Low', isDone: false },
    });

  render() {
    const { isModalOpen, modalForm, todos, searchForm } = this.state;
    const {
      title: createTitle,
      description: createDescription,
      priority: createPriority,
    } = modalForm;
    const { title, priority, progress } = searchForm;
    const todosToRender = filterTodos(todos, title, priority, progress);

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
              handleChange={this.handleCreateInputChange}
              title={createTitle}
              description={createDescription}
              priority={createPriority}
              handleClose={this.handleCloseModal}
              handleSubmit={this.handleSubmit}
            />
          </div>
        )}
      </main>
    );
  }
}
