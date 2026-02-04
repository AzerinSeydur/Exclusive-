import React, { useEffect, useState } from 'react'
import preview from '../../assets/images/cons.png'
import gal1 from '../../assets/images/cons.png'
import gal2 from '../../assets/images/con1.png'
import gal3 from '../../assets/images/con2.png'
import product1 from '../../assets/images/product1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'
import p4 from '../../assets/images/p4.png'
import { Link, useParams } from 'react-router-dom'
import { FaMinus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import axios from 'axios'
const ProductDetails = () => {
    const{id} = useParams()
    let [quantity, setQuantity] = useState(1)
    const colors = [
        {id:1, bgcolor:'#A0BCE0'},
        {id:2, bgcolor:'#E07575'},
    ]
    const sizes = [
        {id:1, name:'XS'},
        {id:2, name:'S'},
        {id:3, name:'M'},
        {id:4, name:'L'},
        {id:5, name:'XL'},
    
    ]
    const rating = 4;

    const releted_products = [
        {id:1, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, image:product1, rating:65, discount:40},
        {id:2, name:'AK-900 Wired Keyboard', dprice:960, price:1160, image:p2, rating:50, discount:20},
        {id:3, name:'IPS LCD Gaming Monitor', dprice:370, price:400, image:p3, rating:75, discount:10},
        {id:4, name:'RGB liquid CPU Cooler', dprice:0, price:170, image:p4, rating:45, discount:0},
    ]
    const [previewImg, setPreviewImg] = useState('')
    const [gallery, setGallery] = useState([])
    const [prodetail, setProDetai] = useState({})
    const [tags, setTags] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((details) => {
            setProDetai(details.data)
            setTags(details.data.tags)
            setPreviewImg(details.data.thumbnail)
            setGallery(details.data.images)
        })
    },[])
  
    
  return (
    <>
    <section className='pt-[109px] pb-[58px]'>
        <div className="container">
            <div className="flex gap-[70px]">
                <div className="w-[60%]">
                    <div className="flex gap-[30px]">
                        <div className='flex w-[30%] flex-col gap-4 items-center'>
                            {
                                gallery.map((gal, index) => (
                                    <div key={index} onClick={() => setPreviewImg(gal)} className='bg-[#F5F5F5] py-3 px-6 rounded-sm'>
                                        <img src={gal} alt="" />
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className='bg-[#F5F5F5] w-[70%] flex items-center py-3 px-6 rounded-sm'>
                            <img className='w-full' src={previewImg} alt="" />
                        </div>
                    </div>
                    <div className='pt-[92px]'>
                        <h3 className='font-popins font-semibold text-[36px] lerading-10 text-[#111827] pb-4'>{prodetail.title}</h3>
                        <p className='font-popins font-normal text-[16px] text-[#4B5563] leading-6 pb-10'>{prodetail.description}</p>
                        <h4 className='font-popins font-semibold text-[24px] leading-8 text-[#4B5563]  pb-10'>Features</h4>
                        <p className='font-popins font-normal text-[16px] text-[#4B5563] leading-6 pb-10'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                        <h4 className='font-popins font-semibold text-[24px] leading-8 text-[#4B5563]'>Keywords</h4>
                        <div className='pt-4 flex gap-2'>
                            {
                                tags.map(tag => (
                                    <a href="" className='flex gap-1 items-center font-popins text- [12px] text-[#4B5563] font-normal leading-4 border border-[#E5E7EB] rounded-[9999px] py-2 px-3.5'>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.84925 8.40233L4.375 10.0625L3.90075 8.40233C3.77818 7.9735 3.54836 7.58297 3.23298 7.2676C2.91761 6.95222 2.52708 6.72241 2.09825 6.59983L0.4375 6.125L2.09767 5.65075C2.5265 5.52818 2.91703 5.29836 3.2324 4.98298C3.54777 4.66761 3.77759 4.27708 3.90017 3.84825L4.375 2.1875L4.84925 3.84767C4.97182 4.2765 5.20164 4.66703 5.51702 4.9824C5.83239 5.29777 6.22292 5.52759 6.65175 5.65017L8.3125 6.125L6.65233 6.59925C6.2235 6.72182 5.83297 6.95164 5.5176 7.26702C5.20222 7.58239 4.97182 7.9735 4.84925 8.40233ZM9.77608 4.20875L9.625 4.8125L9.47392 4.20875C9.38744 3.86259 9.20851 3.54645 8.95627 3.2941C8.70403 3.04176 8.38795 2.8627 8.04183 2.77608L7.4375 2.625L8.04183 2.47392C8.38795 2.3873 8.70403 2.20824 8.95627 1.9559C9.20851 1.70355 9.38744 1.38741 9.47392 1.04125L9.625 0.4375L9.77608 1.04125C9.86261 1.38748 10.0416 1.70368 10.294 1.95603C10.5463 2.20838 10.8625 2.38739 11.2087 2.47392L11.8125 2.625L11.2087 2.77608C10.8625 2.86261 10.5463 3.04162 10.294 3.29397C10.0416 3.54632 9.86261 3.86252 9.77608 4.20875ZM8.97983 11.1224L8.75 11.8125L8.52017 11.1224C8.45573 10.9291 8.34718 10.7535 8.2031 10.6094C8.05902 10.4653 7.88338 10.3568 7.69008 10.2923L7 10.0625L7.69008 9.83267C7.88338 9.76823 8.05902 9.65968 8.2031 9.5156C8.34718 9.37152 8.45573 9.19588 8.52017 9.00258L8.75 8.3125L8.97983 9.00258C9.04427 9.19588 9.15282 9.37152 9.2969 9.5156C9.44097 9.65968 9.61662 9.76823 9.80992 9.83267L10.5 10.0625L9.80992 10.2923C9.61662 10.3568 9.44097 10.4653 9.2969 10.6094C9.15282 10.7535 9.04427 10.9291 8.97983 11.1224Z" stroke="#4B5563" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        {tag}
                                    </a>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="w-[40%]">
                    <h3 className='font-inter font-semibold text-[24px] leading-6 text-black'>{prodetail.title}</h3>
                    <div className='flex items-center gap-2 pt-4'> 

                        <div className='flex gap-1 items-center'>
                            {
                                Array.from({length:5}).map((_,i) => {
                                    const rating = prodetail.rating
                                    const fullStar = Math.floor(rating)
                                    const halfStar = rating - fullStar >= 0.5
                                    if(i < fullStar) return <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />

                                    if(i === fullStar && halfStar) return <TiStarHalfOutline className='text-[20px] text-[#FFAD33]' />

                                    return <TiStarOutline className='text-[20px] text-[#FFAD33]' />
                                })
                            }
                        </div>
                        <span className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]'>({prodetail.reviews?.length} Reviews)</span>
                    </div>
                    <h4 className='pt-4 pb-6 font-inter font-normal text-[24px] leading-6 text-black'>${prodetail.price}</h4>
                    <p className='font-popins font-normal text-[14px] leading-[21px] text-black pr-11 pb-6 border-b border-[rgba(0,0,0,0.5)]'>{prodetail.description}</p>

                    <div className='color pt-6 flex items-center gap-6 pb-6'>
                        <div>
                            <h3 className='font-inter font-normal text-[20px] leading-5 text-black'>Colors:</h3>
                        </div>
                        <div className='flex gap-2'>
                            {
                                colors.map(color => (
                                    <div className='mt-2'>
                                        <input type="radio" name='color' id={`color${color.id}`} className='hidden' />
                                        <label htmlFor={`color${color.id}`} className='cursor-pointer'>
                                            <span style={{ backgroundColor: color.bgcolor }} className='w-5 h-5 inline-block bg-[${color.bgcolor}] rounded-full'></span>
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='size flex items-center gap-6'>
                        <div>
                            <h3 className='font-inter font-normal text-[20px] leading-5 text-black'>Size:</h3>
                        </div>
                        <div className='flex gap-2'>
                            {
                                sizes.map(size => (
                                    <div className='mt-1'>
                                        <input type="radio" name='size' id={`size${size.id}`} className='hidden' />
                                        <label htmlFor={`size${size.id}`} className='cursor-pointer'>
                                            <span className='w-8 h-8 inline-block rounded-sm border border-[rgba(0,0,0,0.5)] text-center leading-[30px] font-popins font-medium text-[14px] text-black'>{size.name}</span>
                                        </label>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>

                    <div className='flex pt-6 items-center gap-4'>
                        <div className='w-[32%] h-11 flex'>
                            <div className='border border-[rgba(0,0,0,0.5)] h-11 w-10 flex justify-center items-center rounded-bl-sm rounded-tl-sm cursor-pointer' onClick={()=> setQuantity(quantity-1)}>
                                <FaMinus className='text-[20px]' />
                            </div>
                            <div className='w-20 h-11 border-t border-b border-[rgba(0,0,0,0.5)] text-center'>
                                <span className='leading-11 font-popins font-medium text-[20px] text-black'>{quantity}</span>
                            </div>
                            <div className='bg-[#DB4444] h-11 w-[41px] flex justify-center items-center rounded-br-sm rounded-tr-sm text-white cursor-pointer' onClick={()=> setQuantity(quantity+1)}>
                                <GoPlus className='text-[24px]' />
                            </div>
                            
                        </div>
                        <div className='w-[45%]'>
                            <a href="" className='font-popins text-[#FAFAFA] text-[16px] leading-6 font-medium bg-[#DB4444] text-center py-2.5 w-full inline-block rounded-sm'>Add to cart</a>
                        </div>
                        <div className='w-[10%]'>
                            <div className='w-10 h-10 border border-[rgba(0,0,0,0.5)] rounded-sm flex justify-center items-center'>
                                <IoMdHeartEmpty className='text-[32px] text-black'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="grid grid-cols-4 gap-[30px] pt-15">
                {
                    releted_products.map(releted => (
                        <div className='product_item'>
                            <div className='bg-[#F5F5F5] p-[49px] rounded-sm relative'>
                                <img src={releted.image} alt="" />
                                {
                                    releted.discount ? (
                                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center absolute top-3 left-3'>
                                            <span className='text-[#FAFAFA] text-[12px] leading-[18px] font-popins'>-{releted.discount }%</span>
                                        </div>
                                    )
                                    :
                                    ''
                                }
                                
                            </div>
                            <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>
                                <Link to="/product/details">{releted.name}</Link>
                            </h3>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3 pt-2 pb-2'>
                                <span className='text-[#DB4444]'>${releted.dprice? releted.dprice : releted.price}</span> 
                                {
                                    releted.dprice ?
                                    <del className='text-[rgba(0,0,0,0.5)]'>${releted.price}</del>
                                    :
                                    ''
                                }
                                
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>({releted.rating})</span>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetails