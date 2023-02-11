import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { useSelector } from 'react-redux'

const ProductView = () => {
  const { productItem } = useSelector((state) => state.productItem)
  console.log("hi", productItem)
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={productItem.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{productItem?.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productItem.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <ReactStars
                    count={5}
                    value={productItem?.rating?.rate}
                    size={24}
                    activeColor="#ffd700"
                    isHalf={true}
                  />,

                  <span className="text-gray-600 ml-3">{productItem?.rating?.count} Reviews</span>
                </span>

              </div>
              <p className="leading-relaxed">{productItem.description}</p>
              <div className='border-b-2 p-7'></div>
              <div class="flex p-5">
                <span className="title-font font-medium text-2xl text-gray-900">₹{productItem.price}</span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">BuyNow</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductView