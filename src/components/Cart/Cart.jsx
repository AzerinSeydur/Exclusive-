import React, { useState } from 'react'
import cart1 from '../../assets/images/cart1.png'
import cart2 from '../../assets/images/cart2.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cart = () => {
    const [price, setPrice] = useState( {
        price1:650,
        price2:550,
    } )

    const [counts, setCounts] = useState( {
        button1:1,
        button2:1,
    } )

    const totalAmount = (price.price1*counts.button1) + (price.price2*counts.button2)

    const handleIncrement = (button) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [button]: prevCounts[button] + 1
         } ) )
    }

    
    const handleDecrement = (button) => {
        if(counts.button1 > 1 || counts.button2 > 1){
                setCounts((prevCounts) => ({
                ...prevCounts,
                [button]: prevCounts[button] - 1
             }))
        }
        
    }

  return (
    <>
    <section className='pt-45.25 pb-20'>
        <div className="container">
            
            <div className="grid grid-cols-4 px-10 py-6 [&>div>h3]:text-black [&>div>h3]:text-[16px] [&>div>h3]:font-popins [&>div>h3]:font-normal [&>div>h3]:leading-6 shadow-cart rounded-sm mb-10">
                <div>
                    <h3>Product</h3>
                </div>
                
                <div className='text-center'>
                    <h3>Price</h3>
                </div>
                
                <div className='text-center'>
                    <h3>Quantity</h3>
                </div>
                
                <div className='text-end'>
                    <h3>Subtotal</h3>
                
                </div>
            </div>
            
            <div className="grid grid-cols-4 px-10 py-6 [&>div>h3]:text-black [&>div>h3]:text-[16px] [&>div>h3]:font-popins [&>div>h3]:font-normal [&>div>h3]:leading-6 shadow-cart rounded-sm mb-10">
                <div className='flex gap-5 items-center'>
                    <img src={cart1} alt="" />
                    <h3>LCD Monitor</h3>
                
                 </div>
                
                <div className='flex gap-5 items-center justify-center'>
                     <h3>$<span>{price.price1}</span></h3>
                 
                 </div>
                
                <div className='flex gap-5 items-center justify-center'>
                   <div className='grid grid-cols-2 gap-4 w-18 h-11 border border-[rgba(0,0,0,0.66)] rounded-sm px-3 py-1.5 items-center'>
                        <div>
                            <span className='font-popins font-normal text-black text-[16px] leading-6 '>{counts.button1}</span>
                        </div>
                        <div>
                            <MdKeyboardArrowUp onClick={() => handleIncrement('button1')} className='text-black text-[16px] cursor-pointer' />
                            <MdKeyboardArrowDown onClick={() => handleDecrement('button1')} className='text-black text-[16px] cursor-pointer' />
                        </div>
                   </div>
                </div>
                <div className='flex gap-5 items-center justify-end'>
                    <h3>${price.price1*counts.button1}<span></span></h3>
                </div>
            </div>

            <div className="grid grid-cols-4 px-10 py-6 [&>div>h3]:text-black [&>div>h3]:text-[16px] [&>div>h3]:font-popins [&>div>h3]:font-normal [&>div>h3]:leading-6 shadow-cart rounded-sm mb-10">
                <div className='flex gap-5 items-center'>
                    <img src={cart2} alt="" />
                    <h3>H1 Gamepad</h3>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <h3>$<span>{price.price2}</span></h3>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                   <div className='grid grid-cols-2 gap-4 w-18 h-11 border border-[rgba(0,0,0,0.63)] rounded-sm px-3 py-1.5 items-center'>
                        <div>
                            <span className='font-popins font-normal text-black text-[16px] leading-6 '>{counts.button2}</span>
                        </div>
                        <div>
                            <MdKeyboardArrowUp onClick={() => handleIncrement('button2')} className='text-black text-[16px] cursor-pointer' />
                            <MdKeyboardArrowDown onClick={() => handleDecrement('button2')} className='text-black text-[16px] cursor-pointer' />
                        </div>
                   </div>
                </div>
                <div className='flex gap-5 items-center justify-end'>
                    <h3>${price.price2*counts.button2}<span></span></h3>
                </div>
            </div>

            <div className='flex justify-between'>
                <a href="" className='font-popins text-[16px] text-black leading-6 font-medium border border-[rgba(0,0,0,0.5)] rounded-sm py-4 px-12 hover:bg-[#DB4444] duration-500 hover:text-white hover:border-[#DB4444]'>Return To Shop</a>
                <a href="" className='font-popins text-[16px] text-black leading-6 font-medium border border-[rgba(0,0,0,0.5)] rounded-sm py-4 px-12 hover:bg-[#DB4444] duration-500 hover:text-white hover:border-[#DB4444]'>Update Cart</a>
            </div>

            <div className='flex justify-end pt-28'>
                <div className='w-117.5 border border-[#000000] px-5.5 pt-8 pb-12 rounded-sm'>
                    <h3 className='font-popins font-medium text-[20px] leading-7 text-[#000000] pb-6'>Cart Total</h3>

                    <div className='flex justify-between font-popins text-[16px] text-black leading-6 font-normal py-4 border-b border-[rgba(0,0,0,0.4)]'>
                        <span>Subtotal:</span>
                        <span>${totalAmount}</span>
                    </div>
                    <div className='flex justify-between font-popins text-[16px] text-black leading-6 font-normal py-4 border-b border-[rgba(0,0,0,0.4)]'>
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className='flex justify-between font-popins text-[16px] text-black leading-6 font-normal py-4'>
                        <span>Subtotal:</span>
                        <span>${totalAmount}</span>
                    </div>

                    <div className='pt-8 text-center'>
                         <Link to="/checkout" className='font-popins text-[16px] text-white leading-6 font-medium rounded-sm py-4 px-12 bg-[#DB4444]'>Procees to checkout</Link>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Cart