import React from 'react';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import Error from './components/Error';
import CoctelList from './components/CoctelList';
import Coctel from './components/Coctel';
import Login from './components/User/Login';
import UserState from './components/Context/User/UserState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <UserState>
        <Navbar />
        <Router>
          <Switch>
            <div className="container-fluid mt-3">
              <Route path="/" component={Home} exact />
              <Route path="/recipelist/:name" component={RecipeList} />
              <Route path="/recipe/:id/:random" component={Recipe} />
              <Route path="/coctellist/:type/:id" component={CoctelList} />
              <Route path="/coctel/:id/:random" component={Coctel} />
              <Route path="/login" component={Login} />
              <Route component={Error} />
            </div>
          </Switch>
        </Router>
      </UserState>
    </>
  );
}

export default App;
