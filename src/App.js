import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreProducts from './Pages/Home/ExploreProducts/ExploreProducts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/exploreproducts">
              <ExploreProducts />
            </Route>

            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
