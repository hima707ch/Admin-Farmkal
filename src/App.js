import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import './styles.css'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Users from './components/Users';
import UserInfo from './components/UserInfo';
import ProductInfo from './components/ProductInfo';

const App = () => {
  return (
    <Router>
    <div className='app'>
      <Navbar />

      <div className='home'>
        <Sidebar />

       
          <Routes>
            <Route path="/" element={<Dashboard />}  />
            <Route path="/products" element={<Products />}  />
            <Route path="/users" element={<Users />}  />
            <Route path="/orders" element={<UserInfo />}  />
          </Routes>
        

      </div>

    </div>

    </Router>
    

    
  )
}

export default App