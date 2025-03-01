import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
// import '../App.css'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <div className='card-cont'>
    <Link to={`/product/${id}`}>
        <div className='pro-card grow'>
          <div className="pro-content">
            <div className='pro-image'>
                  <img src={image[0]} alt=''/>
            </div>
            <div className='pro-text'>
              <p className='pro-card-name'>{name}</p>
              <p className='pro-card-price'>{currency}{price}</p>
            </div>
          </div>
      </div>
      {/* <div className='featured-card grow'>
        <div className="fc-content">
            <div className='fc-image'>
                <img src={image[0]} alt=''/>
            </div>
            <p className='feat-card-name'>{name}</p>
            <p className='feat-card-price'>{currency}{price}</p>
            <button>Add to Cart</button>
          </div>
      </div> */}
    </Link>
    </div>
  )
}

export default ProductItem