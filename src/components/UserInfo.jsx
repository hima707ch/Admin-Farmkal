import React from 'react'
import { Typography } from "@mui/material";
import './dashboard.css'

const UserInfo = () => {
  return (
    <div className='user-info'>

        <div className='col1'>
            <Typography > <p className='head' > Profile pic </p>  </Typography>

            <Typography > <p className='head' > Basic Info </p>  </Typography>
            <p>Name : <span>Himanshu</span> </p>
            <p> Object Id : <span> himanshu </span> </p>
            <p>email : <span>Himanshu</span> </p>
            <p>username : <span>Himanshu</span> </p>
            <p>phone : <span>Himanshu</span> </p>
            <p>bio : <span>Himanshu</span> </p>
            <p>city : <span>Himanshu</span> </p>
            <p>state : <span>Himanshu</span> </p>

        </div>

        <div className='col2'>
            <Typography > <p className='head' > Recent Views </p>  </Typography>

            <Typography > <p className='head' > Sell Items </p>  </Typography>

            <Typography > <p className='head' > Intrested in </p>  </Typography>

            <Typography > <p className='head' > Items sold </p>  </Typography>

            <Typography > <p className='head' > Items purchased </p>  </Typography>
        </div>

        

    </div>
  )
}

export default UserInfo