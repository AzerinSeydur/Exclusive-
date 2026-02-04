import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname

  return (
    <>
        <nav className='border-b border-[rgba(0,0,0,0.25)]'>
            <div className='bg-black py-3'>
                <div className="container">
                    <div className="flex">
                        <div className="w-[80%] text-end">
                            <p className='font-popins text-[14px] leading-[21px] text-[#FAFAFA] font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href=""  className='font-semibold leading-6 underline'>ShopNow</a></p>
                        </div>
                        <div className="w-[20%] text-end">
                            <div className='flex justify-end gap-[9px] items-center'>
                                <div className="relative w-22">
                                    <select className="appearance-none w-full px-3 outline-0 font-popins text-[14px] leading-[21px] text-[#FAFAFA] font-normal">
                                        <option className='text-black'>English</option>
                                        <option className='text-black'>Bangla</option>
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                        <IoIosArrowDown className='text-[18px] text-[#FAFAFA] mt-1' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex pt-10 pb-4 items-center">
                    <div className="w-[10%]">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-[60%]">
                        <ul className='flex main_menu  justify-center gap-12'>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/register">Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="w-[30%] flex gap-6 justify-end">
                        <div className='w-[243px] relative'>
                            <input type="text" className='bg-[#F5F5F5] py-2.5 ps-4 pe-3 w-full rounded-sm font-popins text-[12px] text-[#000000] leading-[18px] font-normal' placeholder='What are you looking for?' />
                            <CiSearch className='absolute top-[50%] translate-y-[-50%] right-3'  />
                        </div>
                        {
                            currentPath != '/register' && currentPath != '/login' &&
                            (
                                <div className='flex gap-4'>
                                    <div className='w-8 h-8 group rounded-full hover:bg-red-500 flex justify-center items-center'>
                                        <Link to="wishlist">
                                            <IoMdHeartEmpty className='text-[18px] text-[#000000 group-hover:text-white cursor-pointer' />
                                        </Link>
                                    </div>
                                    <div className='w-8 h-8 group rounded-full hover:bg-red-500 flex justify-center items-center'>
                                        <Link to="cart">
                                            <IoCartOutline className='text-[18px] text-[#000000] group-hover:text-white cursor-pointer' />
                                        </Link>
                                    </div>
                                    <div className='w-8 h-8 group rounded-full hover:bg-red-500 flex justify-center items-center'>
                                        <Link to="/profile">
                                            <LuUser className='text-[18px] text-[#000000] group-hover:text-white' />
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar