import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem'

function Collection() {

  const { products } = useContext(ShopContext);
  const [ showFilter,setShowFilter ] = useState(false);
  const [ filterProducts,setFilterProducts ] = useState([]);

  useEffect(()=>{
    setFilterProducts(products);
  },[])

  return (
    <div className='shop-container'>
      <div className="filters">
        <p>FILTERS</p>
        <button onClick={() => setShowFilter(!showFilter)}>
          {showFilter ? 'Hide content' : 'Show content'}
        </button>
        {showFilter && (
          <div>
            <p>CATEGORIES</p>
          </div>
        )}
      </div>


      <div>
        <div>
          <h2>All Products</h2>
        </div>
        <div>
          <select>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className='all-products'>
          {
            filterProducts.map((item,index) =>(
              <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
            ))
          }
        </div>

      </div>

        




    </div>
  )
}

export default Collection