import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Booking from './pages/booking';
import './App.css';

function App() {

  const [isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
      setIsOpen(!isOpen)
  }

  let routes = (
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/booking' component={Booking} />
      </Switch>
  );
  //Auth user routes
  // if (this.props.isAuthenticated)

  return (
    <>
      <div className='App'>
      <Router>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      {routes}
      </Router>
      </div>
    </>
  );
}

export default App;
