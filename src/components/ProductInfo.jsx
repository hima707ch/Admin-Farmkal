import React, { useEffect, useState } from 'react'
import { Typography, useScrollTrigger } from "@mui/material";
import { useLocation } from 'react-router-dom';
import './styles/info.css'
import axios from 'axios';

const Server = `https://cr5pww-4000.csb.app`;

const ProductInfo = () => {

  const location = useLocation();

  const [product, setProduct] = useState({});
  const [seller, setSeller] = useState({});

  async function fetchSeller(){
    const resp = await axios.get(`${Server}/api/v1/user/${product.seller}`)
    const user = resp.data.user;
    console.log(user);
    setSeller(user);
  }

  useEffect(() => {
    location.state && setProduct(location.state.data);
  }, []);


  useEffect(() => {
    product.seller && fetchSeller();
  }, [product]);


  console.log(product);

  return (
    <div className='user-info'>


      <div>
        <Typography > <p className='head' > Images </p>  </Typography>
      </div>

      <div>
        <div className='card' >
          <Typography > <span className='head' > Basic Info </span>  </Typography>

          <p> Id : <span> {product._id} </span> </p>
          <p>Name : <span> { product.name  }  </span>  </p>
          <p>Description : <span> { product.description } </span> </p>
          <p>Price : <span> { product.price } </span> </p>
          <p>Category : <span> { product.category } </span> </p>
          <p>state : <span> { product.state } </span> </p>
          <p>city : <span> { product.city } </span> </p>
        </div>

        <div className='card'>

          <Typography > <span className='head' > Seller </span>  </Typography>

          <p> Name : <span> { seller.name } </span> </p>
          <p> Id : <span> { seller._id } </span> </p>
          <p> city : <span> { seller.city } </span> </p>
          <p> Picture : <span> { seller.name } </span> </p>
          <button> See Seller Info </button>

        </div>

<div className='card'>
          <Typography > <span className='head' > Reviews </span>  </Typography>
          <p> No reveiws yet </p>
</div>


      <div className='card'>
          <Typography > <span className='head' > Time </span>  </Typography>
          <p> Created At : <span> { product.createdAt && product.createdAt.slice(0,10) } -- (Y-M-D) </span> </p>
      </div>

      </div>



    </div>
  )
}

export default ProductInfo