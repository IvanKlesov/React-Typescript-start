import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';


function App() {
  return (
      <BrowserRouter>
        <div>
          <div>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/todos'>To Do</NavLink>
          </div>
          <Route path={'/users'} exact>
            <UsersPage />
          </Route>
          <Route path={'/todos'} exact>
            <TodosPage />
          </Route>
          <Route path={'/users/:id'}>
            <UserItemPage />
          </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
