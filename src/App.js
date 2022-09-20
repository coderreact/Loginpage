
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import ChangePassword from './ChangePassword';
import Forgot from './Forgot';
import './stylee.css'

function App() {
  return (
    <React.Fragment>
      <div className='home'>
        <div className='content'>
          <Router>
            <p className='img'>
              <b><Link to='/' className='text'>Sign up</Link>&nbsp;</b>
              <b><Link to='/Login' className='text'>Sign in</Link></b>
            </p>
            <Routes>
              <Route path='/' element={<Registration />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/ChangePassword' element={<ChangePassword />} />
              <Route path='/Forgot' element={<Forgot />} />
            </Routes>
          </Router>
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
