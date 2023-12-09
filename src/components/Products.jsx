import React from 'react'
import Table from './Table'

const Products = () => {
  return (
    <div className='dashboard'>
        <h1>Products</h1>

        <Table route="products" />

    </div>
  )
}

export default Products