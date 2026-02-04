import React from 'react'

const Profile = () => {
  return (
    <section className='pb-[140px]'>
        <div className="container">
            <div className='text-end py-20'>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-black'>Welcome! <span className='text-[#DB4444]'>Md Rimel</span></p>
            </div>
            <div className="flex gap-[85px]">
                <div className="w-[20%] flex flex-col gap-3 [*&>a]:text-[16px] [*&>a]:font-popins [*&>a]:font-medium [*&>a]:leading-6 [*&>a]:text-black">
                    <a href="">My Account</a>
                    <a href="">My Orders</a>
                    <a href="">My WishList</a>
                </div>
                <div className="w-[80%] rounded-sm shadow-cart px-20 pt-10 pb-14">
                    <h3 className='font-popins font-medium text-[20px] leading-7 text-[#DB4444] pb-4'>Edit Your Profile</h3>

                    <form action="">
                        <div className='flex gap-[50px] pb-6'>
                            <div className='w-1/2 flex flex-col [*&>label]:text-[16px] [*&>label]:font-popins [*&>label]:font-normal [*&>label]:leading-6 [*&>label]:text-black'>
                                <label htmlFor="" className='pb-2'>First Name</label>
                                <input className='bg-[#F5F5F5] py-3 px-4 rounded-sm outline-0 font-popins text-[16px] font-normal leading-6 text-[rgba(0,0,0,0.5)]' type="text"  placeholder="Md" />
                            </div>
                            <div className='w-1/2 flex flex-col [*&>label]:text-[16px] [*&>label]:font-popins [*&>label]:font-normal [*&>label]:leading-6 [*&>label]:text-black'>
                                <label htmlFor="" className='pb-2'>First Name</label>
                                <input className='bg-[#F5F5F5] py-3 px-4 rounded-sm outline-0 font-popins text-[16px] font-normal leading-6 text-[rgba(0,0,0,0.5)]' type="text"  placeholder="Rimel" />
                            </div>
                        </div>
                        <div className='flex gap-[50px] pb-6'>
                            <div className='w-1/2 flex flex-col [*&>label]:text-[16px] [*&>label]:font-popins [*&>label]:font-normal [*&>label]:leading-6 [*&>label]:text-black'>
                                <label htmlFor="" className='pb-2'>Email</label>
                                <input className='bg-[#F5F5F5] py-3 px-4 rounded-sm outline-0 font-popins text-[16px] font-normal leading-6 text-[rgba(0,0,0,0.5)]' type="text"  placeholder="rimel1111@gmail.com" />
                            </div>
                            <div className='w-1/2 flex flex-col [*&>label]:text-[16px] [*&>label]:font-popins [*&>label]:font-normal [*&>label]:leading-6 [*&>label]:text-black'>
                                <label htmlFor="" className='pb-2'>Address</label>
                                <input className='bg-[#F5F5F5] py-3 px-4 rounded-sm outline-0 font-popins text-[16px] font-normal leading-6 text-[rgba(0,0,0,0.5)]' type="text"  placeholder="Kingston, 5236, United State" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[50px] pb-6'>
                            <div className='[*&>label]:text-[16px] [*&>label]:font-popins [*&>label]:font-normal [*&>label]:leading-6 [*&>label]:text-black'>
                                <label htmlFor="">Password Changes</label>
                               <div className='flex pt-2 flex-col gap-4'>
                                 <input className='bg-[#F5F5F5] w-full py-3 px-4 rounded-sm outline-0 font-popins text-[16px] font-normal leading-6 text-[rgba(0,0,0,0.5)]' type="text"  placeholder="Current Passwod" />
                                 <input className='bg-[#F5F5F5] w-full py-3 px-4 rounded-sm outline-0 font-popins text-[16px] font-normal leading-6 text-[rgba(0,0,0,0.5)]' type="text"  placeholder="New Passwod" />
                                 <input className='bg-[#F5F5F5] w-full py-3 px-4 rounded-sm outline-0 font-popins text-[16px] font-normal leading-6 text-[rgba(0,0,0,0.5)]' type="text"  placeholder="Confirm New Passwod" />
                               </div>
                            </div>
                        </div>
                        <div className='flex justify-end gap-8 items-center'>
                            <a href="" className='font-popins font-medium text-[16px] leading-6 text-black'>Cancel</a>
                            <button type='submit' className='bg-[#DB4444] py-4 px-12 font-popins font-medium text-[16px] leading-6 text-[#FAFAFA] rounded-sm'>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile