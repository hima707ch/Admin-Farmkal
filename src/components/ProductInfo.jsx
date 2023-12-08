import React from 'react'
import { Typography } from "@mui/material";

const ProductInfo = () => {
  return (
    <div className='user-info'>

        <div>
            <Typography > <p className='head' > Images </p>  </Typography>            
        </div>

        <div>
        <Typography > <p className='head' > Basic Info </p>  </Typography>
            <p>Name : <span>Himanshu</span> </p>
            <p>Description : <span>Himanshu</span> </p>
            <p>Price : <span>Himanshu</span> </p>
            <p>Category : <span>Himanshu</span> </p>
            <p>state : <span>Himanshu</span> </p>
            <p>city : <span>Himanshu</span> </p>
        <Typography > <p className='head' > Seller </p>  </Typography>
        <Typography > <p className='head' > Reviews </p>  </Typography>
        <Typography > <p className='head' > Time </p>  </Typography>
        </div>

        

    </div>
  )
}

export default ProductInfo