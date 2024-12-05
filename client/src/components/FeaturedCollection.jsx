import { React, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem.jsx'
// import {Link} from 'react-router-dom'

const FeaturedCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,3));
    }, [])

  return (
    <div>
        <div className='featured'>
            <h3>Our Products</h3>
            <p>We have medicine at over 50% to 80% in savings. Order now before supplies last.</p>
        </div>

        {/* Product Rendering */}
        <div className='featured-cards'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            } 
        </div>
        
    </div>
  )
}

export default FeaturedCollection