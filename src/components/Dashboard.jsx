import React from 'react'
import './dashboard.css';
import BasicTable from './BasicTable.tsx';

const Dashboard = () => {
  return (
    <div className='dashboard'>

        <h1> Dashboard </h1>  

        <div className='circle-cont'>
            <div className='circle tomato'>
                <p>Product <br/> 56 </p>
            </div> 

            <div className='circle'>
                <p>Users <br/> 56 </p>
            </div> 

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