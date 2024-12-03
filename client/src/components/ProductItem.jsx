import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
// import '../App.css'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className='featured-card'>
          <div className=''>
              <img src={image[0]} alt=''/>
          </div>
          <p>{name}</p>
          <p>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem