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
  const {products,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
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
          <div className='pd-cont-1'>
            <div className='pd-logo'>
            <img src={productData.logo} alt='' />
            </div>
            <div className='pd-main-img'>
              <img src={image} alt="" />
            </div> 
          </div>
          <div>
            <div className='pd-med-prices'>
            <img src={productData.prices} alt='' />
            </div>
            
            <div className='pd-button'>
              {/* <h3>{productData.name}</h3>
              <p>${productData.price}</p> */}
              {/* <img src={productData.info} alt='' /> */}
              <span>{productData.description}</span>
              {/* 302555 */}
              <button onClick={()=>addToCart(productData._id,size )}>Add to Cart</button> 
            </div>
          </div>
      </div>
      {/* <div className='pd-med-info'>
          <img src={productData.info} alt='' />
      </div> */}
        
       </div>
      
    
  ) : <div className='opacity-0'>
    
  </div>
  
}
export default Product