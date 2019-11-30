import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodosPage from '../pages/TodosPage';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={TodosPage} />
      <Route path="*" component={NotFoundPage} />
      {/* <Redirect to="/todos" /> */}
    </Switch>
  );
}

export default App;
