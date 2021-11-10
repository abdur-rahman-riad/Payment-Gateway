import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreProducts from './Pages/Home/ExploreProducts/ExploreProducts';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/exploreproducts">
            <ExploreProducts></ExploreProducts>
          </Route>

          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
