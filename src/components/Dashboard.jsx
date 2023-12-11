import React from 'react'
import './styles/dashboard.css';
import BasicTable from './BasicTable.tsx';
import { Link } from 'react-router-dom';
import ShortNav from './ShortNav.jsx';

const Dashboard = () => {
  return (
    <div className='dashboard'>

        <ShortNav />

        <h1> Dashboard </h1>  

        <div className='circle-cont'>
            <Link to = '/products'>
                <div className='circle tomato'>
                    <p className='dash-count'>Product <br/> 56 </p>
                </div> 
            </Link>

            <Link to="/users">
                <div className='circle'>
                    <p className='dash-count'>Users <br/> 56 </p>
                </div> 
            </Link>

            

            <div className='circle yellow'>
                <p className='dash-count'>Cities <br/> 56 </p>
            </div>    
                 
        </div>

        <h3 className='title'> Most liked product </h3>

        <BasicTable />

        <h3 className='title'> Recent Deals </h3>

        <BasicTable />


    </div>
  )
}

export default Dashboard