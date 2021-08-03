import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/index';
import Booking from './Pages/Booking';
import BrandClothing from './Pages/BrandClothing';
import History from './Pages/History';
import Artist from './Pages/Artist';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let routes = (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/booking' component={Booking} />
      <Route path='/artist' component={Artist} />
      <Route path='/brandClothing' component={BrandClothing} />
      <Route path='/history' component={History} />
    </Switch>
  );
  //Auth user routes
  // if (this.props.isAuthenticated)

  return (
    <>
      <div className='App'>
        <Router>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          {routes}
        </Router>
      </div>
    </>
  );
}

export default App;
