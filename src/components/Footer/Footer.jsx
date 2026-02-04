import React from 'react'
import footerlogo from '../../assets/images/footerlogo.png'
import qr from '../../assets/images/qrcode.png'
import appstore from '../../assets/images/appstore.png'
import gplaystore from '../../assets/images/googlepay.png'
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <footer className='bg-black'>
        <div className='container'>
            <div className="flex pt-20 pb-[100px] gap-[87px]">
                <div className='w-[25%]'>
                    <img src={footerlogo} alt="" />
                    <h3 className='py-6 font-popins text-[#FAFAFA] text-[20px] font-medium leading-7'>Subscribe</h3>
                    <p className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>Get 10% off your first order</p>
                </div>
                <div className='w-[16%]'>
                    <h3 className='pb-6 font-popins text-[#FAFAFA] text-[20px] font-medium leading-7'>Support</h3>
                    <div className='flex flex-col gap-4'>
                        <p className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>exclusive@gmail.com</p>
                        <p className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>+88015-88888-9999</p>
                    </div>
                </div>
                <div className='w-[16%]'>
                    <h3 className='pb-6 font-popins text-[#FAFAFA] text-[20px] font-medium leading-7'>Account</h3>
                    <div className='flex flex-col gap-4'>
                        <a className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>My Account</a>
                        <a className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>Login / Register</a>
                        <a className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>Cart</a>
                        <a className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>Wishlist</a>
                    </div>
                </div>
                <div className='w-[18%]'>
                    <h3 className='pb-6 font-popins text-[#FAFAFA] text-[20px] font-medium leading-7'>Quick Link</h3>
                    <div className='flex flex-col gap-4'>
                        <a className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>Privacy Policy</a>
                        <a className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>Terms Of Use</a>
                        <a className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>FAQ</a>
                        <a className='font-popins text-[#FAFAFA] text-[16px] font-normal leading-6'>Contact</a>
                    </div>
                </div>
                <div className='w-[18%]'>
                    <h3 className='pb-6 font-popins text-[#FAFAFA] text-[20px] font-medium leading-7'>Download App</h3>
                    <div className='flex gap-2.5 pb-6'>
                        <div>
                            <img src={qr} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <a href="">
                                <img src={appstore} alt="" />
                            </a>
                            <a href="">
                                <img src={gplaystore} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <a href="" className='text-white'><RiFacebookLine className='text-[18px]' /></a>
                        <a href="" className='text-white'><RiTwitterLine className='text-[18px]' /></a>
                        <a href="" className='text-white'><RiInstagramLine className='text-[18px]' /></a>
                        <a href="" className='text-white'><RiLinkedinLine className='text-[18px]' /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t border-[rgba(255,255,255,0.25)] pt-4 pb-6 text-center'>
            <p className='font-popins text-[16px] font-normal leading-6 text-[rgba(255,255,255,0.24)]'>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer