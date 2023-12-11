import React, {useState} from 'react'
import Table from './Table'
import ShortNav from './ShortNav';

const Products = () => {

  const [inputValue, setInputValue] = useState({
    category : "",
    city :""
  });

  const [city, setcity] = useState("");
  const [category, categoryset] = useState("");
  
  const handleInputChange = (event) => {
    setInputValue( (prev)=>{
      return{
        ... prev,
        [event.target.name] : event.target.value
      }
    } )
    
    console.log(inputValue);
  };

  return (
    <div className='dashboard'>
      <ShortNav />
        <h1>Products</h1>

    <div className='filter-cont'>
      <input
      name="city"
        type="text"
        value={city }
        onChange={ (e)=> setcity(e.target.value)}
        placeholder="City"
      />

      <input
      name="category"
        type="text"
        value={category }
        onChange={(e)=> categoryset(e.target.value)}
        placeholder="category"
      />

      <button className='filter' onClick={ ()=>{
        setInputValue({
          category:category,
          city:city
        })
      } }> Get </button>


    </div>

        { <Table route="products" filter = {inputValue} />}

    </div>
  )
}

export default Products