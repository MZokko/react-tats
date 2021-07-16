import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Booking from './pages/Booking'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/booking' component={Booking} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
