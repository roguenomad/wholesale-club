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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue consequat, malesuada mi ut, pharetra nunc. Praesent sagittis posuere convallis. Aliquam elementum, risus sed luctus viverra, tellus sapien pulvinar mauris, non ornare dolor nibh sit amet purus.</p>
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