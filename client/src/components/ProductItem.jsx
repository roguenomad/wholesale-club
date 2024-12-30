import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
// import '../App.css'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className='featured-card grow'>
          <div className=''>
              <img src={image[0]} alt=''/>
          </div>
          <p className='feat-card-name'>{name}</p>
          <p className='feat-card-price'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem