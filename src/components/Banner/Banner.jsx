import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import apple from '../../assets/images/apple.png'
import iphone from '../../assets/images/iphone.png'
import { IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = () => {
    
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
    };
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    })
        
  return (
    <>
    <section>
        <div className="container">
            <div className="flex gap-11.25">
                <div className="w-[20%] category flex flex-col gap-4 pt-10 border-r border-[#D9D9D9]">
                    {
                        categories.slice(0, 9).map(category => (
                            <Link key={category.slug} to={`/category/product/${category.slug}`}>{category.name}</Link>
                        ))
                    }
                    
                </div>
                <div className="w-[80%] pt-10">
                    <Slider {...settings}>
                    <div className='slider-item'>
                        <div className='bg-black flex'>
                                <div className="w-[40%] pt-14.5 ps-16">
                                <div className='flex gap-6 items-center pb-5'>
                                    <img src={apple} alt="" />
                                    <span className='font-popins text-white text-[16px] font-normal leading-6'>iPhone 14 Series</span>
                                </div>
                                <h2 className='font-inter text-[48px] leading-15 font-semibold text-white pb-5.5'>Up to 10% off Voucher</h2>

                                <p className='flex gap-2 items-center'>
                                    <a href="" className='font-popins font-medium text-[16px] text-white leading-6 border-b border-white pb-[5px]'>Shop Now</a>
                                    <IoArrowForward className='text-white' />
                                    </p>
                                </div>
                            <div className="w-[60%] pt-4">
                                <img src={iphone} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='slider-item'>
                        <div className='bg-black flex'>
                            <div className="w-[40%] pt-14.5 ps-16">
                                <div className='flex gap-6 items-center pb-5'>
                                    <img src={apple} alt="" />
                                    <span className='font-popins text-white text-[16px] font-normal leading-6'>iPhone 15 Series</span>
                                </div>
                                <h2 className='font-inter text-[48px] leading-15 font-semibold text-white pb-5.5'>Upcomming soon</h2>

                                    <p className='flex gap-2 items-center'>
                                    <a href="" className='font-popins font-medium text-[16px] text-white leading-6 border-b border-white pb-1.25'>Shop Now</a>
                                    <IoArrowForward className='text-white' />
                                    </p>
                            </div>
                            <div className="w-[60%] pt-4">
                                <img src={iphone} alt="" />
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner