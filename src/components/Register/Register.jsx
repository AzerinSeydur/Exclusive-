
import reg from '../../assets/images/reg.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className='pt-[107px] pb-[246px]'>
        <div className="container">
            <div className="flex gap-[129px] items-center">
                <div className="w-[60%]">
                    <img src={reg} alt="" />
                </div>
                <div className="w-[40%]">
                    <h2 className='font-inter font-medium text-[36px] leading-[30px] text-black pb-6'>Create an account</h2>
                    <p className='text-[16px] text-black font-popins font-normal leading-6'>Enter your details below</p>
                    <form action="">
                        <div className='pt-12'>
                            <div className='pb-10'>
                                <input placeholder='Name' type="text" className='w-full border-b border-[rgba(0,0,0,0.5)] outline-0 text-[rgba(0,0,0,0.4)] font-popins text-[16px] leading-6 font-normal pb-2' />
                            </div>
                            <div className='pb-10'>
                                <input placeholder='Email or Phone Number' type="text" className='w-full border-b border-[rgba(0,0,0,0.5)] outline-0 text-[rgba(0,0,0,0.4)] font-popins text-[16px] leading-6 font-normal pb-2' />
                            </div>
                            <div className='pb-10'>
                                <input placeholder='Password' type="text" className='w-full border-b border-[rgba(0,0,0,0.5)] outline-0 text-[rgba(0,0,0,0.4)] font-popins text-[16px] leading-6 font-normal pb-2' />
                            </div>
                            <div>
                                <button href="" className='font-popins text-[#FAFAFA] text-[16px] leading-6 font-medium bg-[#DB4444] text-center py-4 w-full inline-block rounded-sm'>Create Account</button>

                                <button href="" className='flex justify-center items-center gap-4 font-popins text-[#000000] text-[16px] leading-6 font-medium border border-[rgba(0,0,0,0.4)] text-center py-4 w-full rounded-sm mt-4'><FcGoogle className='text-[24px]'/> <span>Sign up with Google</span></button>

                                <p className='text-center pt-[34px] font-popins text-[rgba(0,0,0,0.7)] text-[16px] leading-6 font-normal'><span className='pr-2'>Already have account?</span> <Link to="/login" className='text-black font-medium border-b border-[rgba(0,0,0,0.7)] pb-1'>Log in</Link></p>
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