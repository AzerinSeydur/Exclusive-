import React, { useEffect, useState } from 'react'
import phone from '../../assets/images/mobile.png'

import axios from 'axios'
import { Link } from 'react-router'

const Category = () => {
        const [categories, setCategories] = useState([])

        useEffect(() => {
            axios.get('https://dummyjson.com/products/categories')
            .then(result => setCategories(result.data))
        })

  return (
    <>
    <section>
        <div className="container">
            <div className='pt-20 pb-15'>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-[14px] h-[30px] bg-red-600 rounded-sm"></span>
                        <p className="text-red-600 font-popins text-[16px] font-semibold">Categories</p>
                    </div>
                <h3 className='font-inter text-[36px] leading-12 font-semibold text-black'>Browse By Category</h3>
            </div>
            <div className="grid grid-cols-6 pb-[130px] gap-[30px]">
                {
                    categories.slice(0, 6).map(category => ( 
                        <Link key={category.slug} to={`/category/product/${category.slug}`}>
                            <div className='border border-[rgba(0,0,0,0.3)] py-6 rounded-sm text-center px-3'>
                                <img className='mx-auto' src={phone} alt="" />
                                <p className='pt-4 font-popins text-[16px] text-black font-normal leading-6'>{category.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>    
        </div>
    </section>
    </>
  )
}

export default Category