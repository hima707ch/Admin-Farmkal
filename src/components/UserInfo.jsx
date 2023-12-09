import React, { useEffect, useState } from 'react'
import { Typography } from "@mui/material";
import './styles/dashboard.css'
import { useLocation } from "react-router-dom"
import './styles/info.css'

const UserInfo = () => {

  const location = useLocation();



  const [user, setUser] = useState({})

  useEffect( ()=>{
    location.state && setUser(location.state.data);
  }, [] )

  return (
    <div className='user-info'>

        <div className='col1'>
          <div className='card' >
            <Typography > <span className='head' > Profile pic </span>  </Typography>
          </div>

<div className='card'>

            <Typography > <span className='head' > Basic Info </span>  </Typography>
            <p>Name : <span> {user.name} </span> </p>
            <p> Object Id : <span>  {user._id}  </span> </p>
            <p>email : <span> {user.email} </span> </p>
            <p>username : <span> {user.username} </span> </p>
            <p>phone : <span> {user.phone} </span> </p>
            <p>bio : <span> {user.bio} </span> </p>
            <p>city : <span> {user.city} </span> </p>
            <p>state : <span> {user.state} </span> </p>
</div>

        </div>

        <div className='col2'>

        <div className='card'>
            <Typography > <span className='head' > Recent Views </span>  </Typography>
            <p> Total : { user.intrest && user.intrest.recentViews.length} </p>
            </div>

            <div className='card'>
            <Typography > <span className='head' > Sell Items </span>  </Typography>
            <p> Total : { user.sellItems && user.sellItems.length} </p>
</div>

            <div className='card'>
            <Typography > <span className='head' > Intrested in </span>  </Typography>
            <p> Total : { user.cart && user.cart.length} </p>
            </div>

            <div className='card'>
            <Typography > <span className='head' > Items sold </span>  </Typography>
            <p> Total : { user.userData && user.userData.sold_items.length} </p>
</div>

            <div className='card'>
            <Typography > <span className='head' > Items purchased </span>  </Typography>
            <p> Total : { user.userData && user.userData.purchased_items.length} </p>
            </div>
        </div>

        

    </div>
  )
}

export default UserInfo