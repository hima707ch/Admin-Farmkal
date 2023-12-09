import React from 'react'
import './styles/dashboard.css';
import BasicTable from './BasicTable.tsx';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard'>

        <h1> Dashboard </h1>  

        <div className='circle-cont'>
            <Link to = '/products'>
                <div className='circle tomato'>
                    <p>Product <br/> 56 </p>
                </div> 
            </Link>

            <Link to="/users">
                <div className='circle'>
                    <p>Users <br/> 56 </p>
                </div> 
            </Link>

            <div className='circle grey'>
                <p>Deals <br/> 56 </p>
            </div>

            <div className='circle grey'>
                <p>Cities <br/> 56 </p>
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