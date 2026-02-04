import React from 'react'

const NotFound = () => {
  return (
    <>
      <section className='pt-[241px] pb-[156px]'>
          <div className="container text-center">
              <h2 className='font-inter font-medium text-[110px] leading-[115px] text-black pb-10'>404 Not Found</h2>
              <p className='font-popins font-normal text-[16px] text-black leading-6 pb-24'>Your visited page not found. You may go home page.</p>
              <a href="" className='font-popins font-medium text-[#FAFAFA] text-[16px] leading-6 bg-[#DB4444] py-4 px-12 rounded-sm'>Back to home page</a>
          </div>
      </section>
    </>
  )
}

export default NotFound