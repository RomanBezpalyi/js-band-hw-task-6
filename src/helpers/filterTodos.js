const filterTodos = (todos, title, priority, progress) => {
  let filteredTodos = [...todos];
  if (title) {
    filteredTodos = filteredTodos.filter(todo =>
      todo.title.toLowerCase().includes(title.toLowerCase()),
    );
  }
  if (priority !== 'All') {
    filteredTodos = filteredTodos.filter(todo => todo.priority === priority);
  }
  if (progress !== 'All') {
    const isDone = progress === 'Done';
    filteredTodos = filteredTodos.filter(todo => todo.isDone === isDone);
  }

  return filteredTodos;
};

export default filterTodos;
