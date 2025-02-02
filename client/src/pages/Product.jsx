import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'

const Product = () => {

  // const { productId } = useParams();
  // console.log(productId);

  // return (
  //   <div>

  //   </div>
  // )


  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        console.log(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(()=> {
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className='pd-container'>
      <div className='pd-img-cont'>
      <div className='pd-images'>
        {
          productData.image.map((item,index)=>(
            <img onClick={()=>setImage(item)} src={item} key={index}/>
          ))
        }
      </div>    
      </div>
      <div className='pd-main-img'>
        <img src={image} alt="" />
      </div>
      <div className='pd-med-info'>
        <img src={productData.info} alt='' />
      </div>
      <div>
        <h3>{productData.name}</h3>
        <p>${productData.price}</p>
        <span>{productData.description}</span>
        {/* 302555 */}
        <button>Add to Cart</button> 

      </div>
      
    </div>
  ) : <div className='opacity-0'>
    
  </div>
  
}
export default Product