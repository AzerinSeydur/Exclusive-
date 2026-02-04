
import React, { useEffect, useState } from 'react'
import explore from '../../assets/images/explore.png'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import axios from 'axios';
import { Link, useParams } from 'react-router';


const SearchProduct = () => {
    const {slug} = useParams()
    const [loader, setLoader] = useState(true)
    const {keyword} =  useParams()
    
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/search?q=${keyword}`)
        .then(result => {
            const keywordlower = keyword.toLowerCase()
            const filterProducts = result.data.products.filter(product => 
                product.title.toLowerCase().includes(keywordlower) ||
                product.description.toLowerCase().includes(keywordlower) ||
                product.brand.toLowerCase().includes(keywordlower) 
            )
            setProducts(filterProducts)
        })
    })
    setTimeout(() => {
        setLoader(false)
    }, 2000)
    const [visibleCount, setVisibleCount] = useState(4)
  return (
    <>
        <section>
            <div className="container border-b border-[rgba(0,0,0,0.25)] pb-[91px]">
                <div className='pb-[88px] pt-20'>
                    <h3 className='font-inter text-[36px] leading-12 font-medium text-black'>Search Keyword: <strong>{keyword}</strong></h3>
                </div>
                {
                    loader ?
                    
                    <div className='grid grid-cols-4 gap-x-[30px]'>
                        {
                        Array.from({length:4}).map((_,i) => {
                            return <div class="flex-1 space-y-6 py-1">
                                        <div class="h-50 rounded bg-gray-200"></div>
                                            <div class="space-y-3">
                                                <div class="grid grid-cols-3 gap-4">
                                                    <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                </div>
                                            <div class="h-2 rounded bg-gray-200"></div>
                                        </div>
                                    </div>
                            })
                        }
                    </div>
                    :
                    <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] pb-[76px]">
                    {
                        products.slice(0, visibleCount).map(product => (
                            <div className='product_item'>
                                <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                                    <Link to={`/product/details/${product.id}`}><img src={product.thumbnail} alt="" /></Link>
                                </div>
                                <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'><Link to="/product/details">{product.title}</Link></h3>
                                <div className='flex gap-2 pt-2'>
                                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                        <span className='text-[#DB4444]'>${product.price}</span> 
                                    </p>
                                    <div className='flex gap-1'>
                                        {
                                            Array.from({length:5}).map((_,i) => {
                                                const rating = product.rating
                                                const fullStar = Math.floor(rating)
                                                const halfStar = rating - fullStar >= 0.5
                                                if(i < fullStar) return <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />

                                                if(i === fullStar && halfStar) return <TiStarHalfOutline className='text-[20px] text-[#FFAD33]' />

                                                return <TiStarOutline className='text-[20px] text-[#FFAD33]' />
                                            })
                                        }
                                    </div>
                                    <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>({product.reviews.length})</span>
                                </div>
                            </div>
                        ))
                    }

                    {
                        products.length == 0 &&
                        <div>
                            <h3>No Matched Product Found</h3>
                        </div>
                    }
                    
                    </div>
                        
                }
                
                {
                    !loader && 
                    <div className='text-center'>
                        {
                            visibleCount < products.length && 
                            <a onClick={() => setVisibleCount(visibleCount+4)} className='font-popins text-[#FAFAFA] text-[16px] leading-6 font-medium bg-[#DB4444] py-4 px-12 rounded-sm select-none cursor-pointer'>View More Products</a>
                        }
                        
                    </div>
                }
            </div>
    </section>
    </>
  )
}

export default SearchProduct