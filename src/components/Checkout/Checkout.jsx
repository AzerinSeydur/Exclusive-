import React from 'react'
import check1 from '../../assets/images/check1.png'
import check2 from '../../assets/images/check2.png'

const Checkout = () => {
  return (
    <>
    <section className='pt-[181px] pb-[188px]'>
        <div className="container">
            <div className='pb-12'>
                <h3 className='font-inter font-medium text-[36px] leading-[30px] text-black'>Billing Details</h3>
            </div>
            <div className="flex gap-[173px]">
                <div className="w-[40%] flex flex-col gap-8 [&>div>label]:font-popins [&>div>label]:text-[16px] [&>div>label]:text-[rgba(0,0,0,0.4)] [&>div>label]:font-normal [&>div>label]:leading-6 [&>div>input]:py-3 [&>div>input]:bg-[#F5F5F5] [&>div>input]:font-popins [&>div>input]:text-[16px] [&>div>input]:text-[rgba(0,0,0,0.4)] [&>div>input]:font-normal [&>div>input]:leading-6 [&>div>input]:outline-0 [&>div>input]:px-3 [&>div>input]:rounded-sm [&>div>input]:mt-2 [&>div>label>span]:text-[rgba(219,68,68,0.4)]">
                    <div>
                        <label className=''>First Name<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Company Name</label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Street Address<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Apartment, floor, etc. (optional)</label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Town/City<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Phone Number<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Email Address<span>*</span></label>
                        <input type="email" className='w-full' />
                    </div>
                </div>
                <div className="w-[60%]">
                    <div className='w-[80%] flex flex-col gap-8'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-6'>
                                <img src={check1} alt="" />
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>LCD Monitor</span>
                            </div>
                            <div>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>$650</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-6'>
                                <img src={check2} alt="" />
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>H1 Gamepad</span>
                            </div>
                            <div>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>$1100</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between gap-6 border-b border-[rgba(0,0,0,0.4)] pb-4 pt-4'>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Subtotal:</span>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>$1750</span>
                            </div>
                            <div className='flex items-center justify-between gap-6 border-b border-[rgba(0,0,0,0.4)] pb-4 pt-4'>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Shipping:</span>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Free</span>
                            </div>
                            <div className='flex items-center justify-between gap-6 pb-4 pt-4'>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Total:</span>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>$1750</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex payment items-center gap-4 pb-8'>
                                <input name='payment_method' className='hidden' id='stripe' type="radio" />
                                <label className='font-popins text-[16px] leading-6 font-normal text-black cursor-pointer flex items-center gap-4' htmlFor="stripe">
                                    <span className='w-6 h-6 inline-block rounded-full border border-black'></span>Stripe
                                </label>
                            </div>
                            <div className='flex payment items-center gap-4 pb-8'>
                                <input name='payment_method' className='hidden' id='cash' type="radio" />
                                <label className='font-popins text-[16px] leading-6 font-normal text-black cursor-pointer flex items-center gap-4' htmlFor="cash">
                                    <span className='w-6 h-6 inline-block rounded-full border border-black'></span>Cash on delivery
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between pt-8'>
                        <input type="text" className='w-[60%] py-4 px-6 border border-[#000000] rounded-sm font-popins text-[16px] leading-6 font-normal text-[rgba(0,0,0,0.5)]' placeholder="Coupon Code" />
                        <button className='bg-[#DB4444] py-4 px-12 font-popins font-medium text-[#FAFAFA] leading-6 rounded-sm'>Apply Coupon</button>
                    </div>
                    <div className='pt-12'>
                        <button className='bg-[#DB4444] py-4 px-12 font-popins font-medium text-[#FAFAFA] leading-6 rounded-sm'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Checkout