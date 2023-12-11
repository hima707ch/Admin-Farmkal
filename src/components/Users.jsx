import React, {useState} from 'react'
import Table from './Table'
import ShortNav from './ShortNav';

const Users = () => {

  const [inputValue, setInputValue] = useState({
    city :""
  });

  const [city, setcity] = useState("");
  
  return (
    <div className='dashboard'>
      <ShortNav />
    <h1>Users</h1>

    <div className='filter-cont'>
      <input
      name="city"
        type="text"
        value={city }
        onChange={ (e)=> setcity(e.target.value)}
        placeholder="City"
      />

      <button className='filter' onClick={ ()=>{
        setInputValue({
          city:city
        })
      } }> Get </button>


    </div>

    <Table route="users" filter = {inputValue} />

</div>
  )
}

export default Users