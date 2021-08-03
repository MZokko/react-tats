import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Booking from './pages/Booking';
import BrandClothing from './pages/BrandClothing';
import History from './pages/History';
import Artist from './pages/Artist';
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
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      {routes}
      </Router>
      </div>
    </>
  );
}

export default App;
