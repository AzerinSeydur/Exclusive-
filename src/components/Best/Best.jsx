import React from 'react'

import product5 from '../../assets/images/product5.png'
import product6 from '../../assets/images/product6.png'
import product7 from '../../assets/images/product7.png'
import product8 from '../../assets/images/product8.png'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

const Best = () => {
  return (
    <>
    <section>
        <div className="container pt-[70px] border-t border-[rgba(0,0,0,0.25)] pb-[150px]">
            <div className='pb-8 flex justify-between'>
                <div className="flex items-center gap-2 mb-3">
                        <span className="w-[14px] h-[30px] bg-red-500 rounded-sm"></span>
                        <p className="text-red-500 font-popins text-[16px] font-semibold">This Month</p>
                </div>
                <h3 className='font-inter text-[36px] leading-12 font-semibold text-black'>Best Selling Products</h3>
                <a href="" className='font-popins text-[#FAFAFA] text-[16px] leading-6 font-medium bg-[#DB4444] py-4 px-12 rounded-sm'>View All</a>
            </div>
            <div className="grid grid-cols-4 gap-[30px]">
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product5} className='mx-auto' alt="" />
                        
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>Gucci duffle bag</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$960</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$1160</del>
                    </p>
                    <div className='flex gap-1'>
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(65)</span>
                    </div>
                </div>
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product6} className='mx-auto' alt="" />
                        
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>The north coat</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$260</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$300</del>
                    </p>
                    <div className='flex gap-1'>
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(65)</span>
                    </div>
                </div>
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product7} className='mx-auto' alt="" />
                        
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>RGB liquid CPU Cooler</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$160</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$170</del>
                    </p>
                    <div className='flex gap-1'>
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(65)</span>
                    </div>
                </div>
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product8} className='mx-auto' alt="" />
                        
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>Small BookSelf</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$360</span> 
                    </p>
                    <div className='flex gap-1'>
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(65)</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Best