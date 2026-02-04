import React from 'react'

import product1 from '../../assets/images/product1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'
import p4 from '../../assets/images/p4.png'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { Link } from 'react-router-dom'

const NewArrival = () => {
  return (
    <>
    <section className='pt-[120px]'>
        <div className="container border-b border-[rgba(0,0,0,0.25)] pb-[102px]">
            <div className='pb-8'>
                <h3 className='font-inter text-[36px] leading-12 font-semibold text-black'>New Arrivals</h3>
            </div>
            <div className="grid grid-cols-4 gap-[30px] pb-[118px]">
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product1} alt="" />
                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-40%</span>
                        </div>
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>
                        <Link to="/product/details">HAVIT HV-G92 Gamepad</Link>
                    </h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$120</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$160</del>
                    </p>
                    <div className='flex gap-1'>
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                    </div>
                </div>
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={p2} alt="" />
                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-35%</span>
                        </div>
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>AK-900 Wired Keyboard</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$960</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$1160</del>
                    </p>
                    <div className='flex gap-1'>
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.25)]' />
                        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(75)</span>
                    </div>
                </div>
                 <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={p3} alt="" />
                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-30%</span>
                        </div>
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>IPS LCD Gaming Monitor</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$370</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$400</del>
                    </p>
                    <div className='flex gap-1'>
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(99)</span>
                    </div>
                </div>
                 <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={p4} alt="" />
                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-25%</span>
                        </div>
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>S-Series Comfort Chair </h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$375</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$400</del>
                    </p>
                    <div className='flex gap-1'>
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                        <TiStarHalfOutline className='text-[20px] text-[#FFAD33]' />
                        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(99)</span>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <a href="" className='font-popins text-[#FAFAFA] text-[16px] leading-6 font-medium bg-[#DB4444] py-4 px-12 rounded-sm'>View All Products</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewArrival