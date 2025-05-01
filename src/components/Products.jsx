import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts,deleteProducts} from '../assets/counter/ProductReducer'
function Products() {
  const products = useSelector((state) => state.PorductReducer);
  const dispatch  = useDispatch();
  const productsHandler= ()=>{
    dispatch(fetchProducts())
    console.log(products.product[0]);
    
  }
      const deleteHandler= (index)=>{
          dispatch(deleteProducts(index));
         
      }
  
  return ( 
    <div className='w-screen min-h-screen px-3 py-6 bg-gray-100'>
    <div className='mb-4 flex justify-center'>
      <button
        onClick={productsHandler}
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow'
      >
        Get Products
      </button>
    </div>
  
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
      {products.product && products.product.length > 0 ? (
        products.product.map((item,index) => (
          <div
            key={item.id}
            className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow mb-3 duration-200 p-4 flex flex-col items-center text-center'
          >
            {/* Badge */}
            {item.price < 50 ? (
              <span className='absolute ml-[-2rem] mt-[-1rem] bg-red-500 text-white text-xs font-bold px-2 py-1 rounded'>
                Sale
              </span>
            ) : item.rating?.rate > 4.5 ? (
              <span className='absolute ml-[-2rem] mt-[-1rem] bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded'>
                Hot
              </span>
            ) : null}
  
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className='h-40 object-contain mb-3'
            />
  
            {/* Title */}
            <h3 className='text-sm font-semibold mb-1'>
              {item.title.length > 40 ? item.title.slice(0, 40) + '...' : item.title}
            </h3>
  
            {/* Price */}
            <p className='text-gray-700 font-bold mb-1'>${item.price.toFixed(2)}</p>
  
            {/* Rating */}
            <div className='flex items-center justify-center gap-1 text-yellow-400 text-sm'>
              {'★'.repeat(Math.round(item.rating?.rate || 0))}
              <span className='text-gray-500 text-xs ml-1'>({item.rating?.count})</span>
            </div>
            <button
        onClick={()=>deleteHandler(index)}
        className='px-2  py-1 mt-2 bg-red-500 text-white rounded-md hover:bg-blue-600 shadow'
      >
        delete  Products
      </button>
          </div>
        ))
      ) : (
        <p className='col-span-full text-center text-gray-500'>No products available</p>
      )}
    </div>
  </div>
  
  )
}

export default Products