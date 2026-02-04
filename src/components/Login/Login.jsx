import React from 'react'
import reg from '../../assets/images/reg.png'
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <section className='pt-[107px] pb-[246px]'>
        <div className="container">
            <div className="flex gap-[129px] items-center">
                <div className="w-[60%]">
                    <img src={reg} alt="" />
                </div>
                <div className="w-[40%]">
                    <h2 className='font-inter font-medium text-[36px] leading-[30px] text-black pb-6'>Log in to Exclusive</h2>
                    <p className='text-[16px] text-black font-popins font-normal leading-6'>Enter your details below</p>
                    <form action="">
                        <div className='pt-12'>
                            
                            <div className='pb-10'>
                                <input placeholder='Email or Phone Number' type="text" className='w-full border-b border-[rgba(0,0,0,0.5)] outline-0 text-[rgba(0,0,0,0.4)] font-popins text-[16px] leading-6 font-normal pb-2' />
                            </div>
                            <div className='pb-10'>
                                <input placeholder='Password' type="text" className='w-full border-b border-[rgba(0,0,0,0.5)] outline-0 text-[rgba(0,0,0,0.4)] font-popins text-[16px] leading-6 font-normal pb-2' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <button href="" className='font-popins text-[#FAFAFA] text-[16px] leading-6 font-medium bg-[#DB4444] text-center py-4 rounded-sm px-12'>Log In</button>
                                <a href="" className='font-popins font-normal text-[#DB4444] leading-6'>Forget Password?</a>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register