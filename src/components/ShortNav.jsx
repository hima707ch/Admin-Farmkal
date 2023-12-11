import React from 'react'
import './styles/sidebar.css';
import { useNavigate } from 'react-router-dom';

const ShortNav = () => {

    const nav = useNavigate();

  return (
    <div className='short-nav'>        
            <button onClick={ ()=> nav('/products') } className='nav-box'>
                Product
            </button>

            <button onClick={ ()=> nav('/users') } className='nav-box'>
                Users
            </button>

            <button onClick={ ()=> nav('/cities') }className='nav-box'>
                Cities
            </button>

    </div>
  )
}

export default ShortNav