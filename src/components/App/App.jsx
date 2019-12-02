import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TodosPage from '../pages/TodosPage';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/todos" />
      </Route>
      <Route path="/todos" component={TodosPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
