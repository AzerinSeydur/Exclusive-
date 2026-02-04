
import React, { useEffect, useState } from 'react'
import explore from '../../assets/images/explore.png'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Shop = () => {
    const {slug} = useParams()
    const [loader, setLoader] = useState(true)
    
    const [products, setProducts] = useState([])
    const [filterBy, setFilterBy] = useState('')
    const [sortBy, setSortBy] = useState('')
    useEffect(() => {
        if(filterBy){
            axios.get(`https://dummyjson.com/products/category/${filterBy}`)
            .then(result => setProducts(result.data.products))
        }
        else{
            axios.get(`https://dummyjson.com/products?sortBy=${sortBy}&order=asc`)
            .then(result => setProducts(result.data.products))
        }

        setTimeout(() => {
            setLoader(false)
        }, 2000)
        
    })
    

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    })

    const itemsPerPage = 8;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset =
        (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };


    console.log(sortBy);
    
  return (
    <>
        <section>
            <div className="container border-b border-[rgba(0,0,0,0.25)] pb-[91px]">
                <div className='pb-[88px] pt-20 flex justify-between'>
                    <h3 className='font-inter text-[36px] leading-12 font-semibold text-black'>Shop</h3>
                    <select onChange={(e)=> setSortBy(e.target.value)} name="" id="">
                        <option value="">Sort By</option>
                        <option value="title">Sort Name</option>
                        <option value="price">Sort Price</option>
                    </select>
                </div>
                <div className="flex">
                    <div className='w-1/5'>
                        <h3 className='font-popins font-medium text-[24px] text-black'>Category</h3>
                        <div className='pt-5 flex flex-col gap-4'>
                            {
                                categories.map(category => (
                                    <a onClick={() => setFilterBy(category.name.replace(" ", "-"))} key={category.name} className='cursor-pointer'>{category.name}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-4/5'>
                        <div></div>
                        <div>
                            {
                                loader ?
                                
                                <div className='grid grid-cols-4 gap-x-[30px]'>
                                    {
                                    Array.from({length:4}).map((_,i) => {
                                        return <div key={i} className="flex-1 space-y-6 py-1">
                                                    <div className="h-50 rounded bg-gray-200"></div>
                                                        <div className="space-y-3">
                                                            <div className="grid grid-cols-3 gap-4">
                                                                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                                                            </div>
                                                        <div className="h-2 rounded bg-gray-200"></div>
                                                    </div>
                                                </div>
                                        })
                                    }
                                </div>
                                :
                                <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] pb-[76px]">
                                {
                                    currentItems.map(product => (
                                        <div className='product_item'>
                                            <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                                                <Link key={product.id} to={`/product/details/${product.id}`}><img src={product.thumbnail} alt="" /></Link>
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
                                                            if(i < fullStar) return <TiStarFullOutline key={i} className='text-[20px] text-[#FFAD33]' />

                                                            if(i === fullStar && halfStar) return <TiStarHalfOutline key={i} className='text-[20px] text-[#FFAD33]' />

                                                            return <TiStarOutline key={i} className='text-[20px] text-[#FFAD33]' />
                                                        })
                                                    }
                                                </div>
                                                <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>({product.reviews.length})</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                                </div>
                                    
                            }
                            
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel={<FaChevronRight/>}
                                previousLabel={<FaChevronLeft/>}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                containerClassName="flex gap-2 justify-center"
                                pageClassName="px-3 py-1 border rounded cursor-pointer"
                                activeClassName="bg-red-400 text-white"
                                previousClassName="px-3 py-1 border rounded bg-green-500 text-white flex justify-center items-center"
                                nextClassName="px-3 py-1 border rounded bg-green-500 text-white flex justify-center items-center"
                                disabledClassName="opacity-50 cursor-not-allowed"
                            />
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default Shop