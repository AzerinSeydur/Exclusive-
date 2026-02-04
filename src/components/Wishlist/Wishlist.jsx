

import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import { IoTrashOutline } from "react-icons/io5";

const Wishlist = () => {
  return (
    <>
    <section className='pt-20 pb-[100px]'>
        <div className="container">
            <div className='pb-[60px]'>
                <p className='font-popins font-normal text-black text-[20px] leading-[26px]'>Wishlist (4)</p>
            </div>
            <div className='grid grid-cols-4 gap-[30px]'>
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product1} alt="" />
                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-40%</span>
                        </div>
                        <div className='w-[34px] h-[34px] bg-white rounded-full text-center absolute top-3 right-3 flex justify-center items-center'>
                            <IoTrashOutline />
                        </div>
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>HAVIT HV-G92 Gamepad</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$560</span> 
                    </p>
                    
                </div>
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product2} alt="" />
                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-40%</span>
                        </div>
                        <div className='w-[34px] h-[34px] bg-white rounded-full text-center absolute top-3 right-3 flex justify-center items-center'>
                            <IoTrashOutline />
                        </div>
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>AK-900 Wired Keyboard</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$150</span> 
                        
                    </p>
                    
                </div>
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product3} alt="" />
                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-40%</span>
                        </div>
                        <div className='w-[34px] h-[34px] bg-white rounded-full text-center absolute top-3 right-3 flex justify-center items-center'>
                            <IoTrashOutline />
                        </div>
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>IPS LCD Gaming Monitor</h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$120</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$160</del>
                    </p>
                    
                </div>
                <div className='product_item'>
                    <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                        <img src={product4} alt="" />
                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-40%</span>
                        </div>
                        <div className='w-[34px] h-[34px] bg-white rounded-full text-center absolute top-3 right-3 flex justify-center items-center'>
                            <IoTrashOutline />
                        </div>
                    </div>
                    <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>S-Series Comfort Chair </h3>
                    <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                        <span className='text-[#DB4444]'>$120</span> 
                        <del className='text-[rgba(0,0,0,0.5)]'>$160</del>
                    </p>
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Wishlist