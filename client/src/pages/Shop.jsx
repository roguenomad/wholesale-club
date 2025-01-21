import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem'

function Collection() {

  const { products } = useContext(ShopContext);
  const [ showFilter,setShowFilter ] = useState(false);
  const [ filterProducts,setFilterProducts ] = useState([]);
  const [category,setCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')
  // const [subCategory,setSubCategory] = useState([]);

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    
    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {
    
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      
        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;
      
          default:
          applyFilter();
          break;   
    }
  }

  useEffect(()=> {
    applyFilter();
  },[category])

  useEffect(()=> {
    sortProduct();
  },[sortType])

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
            <div>
              <p>
                <input type="checkbox" value={'Diabetes'} onChange={toggleCategory}/> Diabetes
              </p>
              <p>
                <input type="checkbox" value={'Cancer'} onChange={toggleCategory} /> Cancer
              </p>
              <p>
                <input type="checkbox" value={'Weight Loss'} onChange={toggleCategory} /> Weight Loss
              </p>
              <p>
                <input type="checkbox" value={'Impotence'} onChange={toggleCategory} /> Impotence
              </p>
            </div>
          </div>
        )}
      </div>


      <div>
        <div>
          <h2>All Products</h2>
        </div>
        <div className='dropdown-products'>
          <select onChange={(e)=>setSortType(e.target.value)}>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className='all-products'>
          {
            filterProducts.map((item,index) =>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>


      </div>

        




    </div>
  )
}

export default Collection