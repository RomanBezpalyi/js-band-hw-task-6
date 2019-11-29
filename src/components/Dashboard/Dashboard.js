import React, { Component } from 'react';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import Modal from '../Modal/Modal';

export default class Dashboard extends Component {
  state = {};

  render() {
    return (
      <main>
        <Form />
        <TodoList />
        <div>
          <Modal />
        </div>
      </main>
    );
  }
}
