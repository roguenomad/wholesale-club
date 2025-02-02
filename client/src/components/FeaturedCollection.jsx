import { React, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem.jsx'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'

const FeaturedCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,5));
    }, [])

  return (
    <div className='featured-container'>
        <div className='featured'>  
            <h3>Our Products</h3>
            <p>We have medicine at over <b>50% to 80%</b> in savings. Order now while supplies last.</p>
            
        </div>
        <div className="our-pro">
                <Link to='/Shop' className='all-pro'>View All</Link>
        </div>
        

        {/* Product Rendering */}
        <div className="card-products">
                <div className='card-product'>
                    <img src={assets.vic2} className='card-pro-img' alt="" />
                    <img src={assets.victoza} className='card-pro-img' alt="" /><br></br>
                    <span className='pro-desc'>For Weight Loss</span> <br></br>
                    <span className='price-strike'>$1,015.00</span>
                    <span>$549.00</span><br></br>
                    <button>Add to Cart</button>
                </div>
                <div className='card-product'>
                    <img src={assets.monjaro} className='card-pro-img' alt="" />
                    <img src={assets.mounj} className='card-pro-img' alt="" /><br></br>
                    <span className='pro-desc'>For Weight Loss</span><br></br>
                    <span className='price-strike'>$1,208.00</span>
                    <span>$549.00</span><br></br>
                    <button>Add to Cart</button>
                </div>
                <div className='card-product'>
                    <img src={assets.monjaro} className='card-pro-img' alt="" />
                    <img src={assets.mounj} className='card-pro-img' alt="" /><br></br>
                    <span className='pro-desc'>For Weight Loss</span><br></br>
                    <span className='price-strike'>$1,208.00</span>
                    <span>$549.00</span><br></br>
                    <button>Add to Cart</button>
                </div>
                <div className='card-product'>
                    <img src={assets.monjaro} className='card-pro-img' alt="" />
                    <img src={assets.mounj} className='card-pro-img' alt="" /><br></br>
                    <span className='pro-desc'>For Weight Loss</span><br></br>
                    <span className='price-strike'>$1,208.00</span>
                    <span>$549.00</span><br></br>
                    <button>Add to Cart</button>
                </div>
                <div className='card-product'>
                    <img src={assets.monjaro} className='card-pro-img' alt="" />
                    <img src={assets.mounj} className='card-pro-img' alt="" /><br></br>
                    <span className='pro-desc'>For Weight Loss</span><br></br>
                    <span className='price-strike'>$1,208.00</span>
                    <span>$549.00</span><br></br>
                    <button>Add to Cart</button>
                </div>
            </div>

        
        
        {/* <div className='featured-cards'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            } 
        </div> */}
        
    </div>
  )
}

export default FeaturedCollection