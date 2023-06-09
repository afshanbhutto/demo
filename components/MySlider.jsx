import React, { useEffect, useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const images = [
    { img : "/pic-1.jpg"},
    { img : "/pic-2.png"},
    { img : "/pic-3.jpg"},
    { img : "/pic-4.png"},
    { img : "/pic-5.png"},
    { img : "/pic-6.png"},
    { img : "/pic-7.png"},
    { img : "/pic-8.jpg"},
]

const MySlider = () => {

    // for responsiveness
    const [slidesToShow, setSlidesToShow] =useState(4);

    const setSlides = () =>{
        if(window.innerWidth <= 1200 && window.innerWidth > 1000){
            setSlidesToShow(3)
        }else if(window.innerWidth <= 1000 && window.innerWidth > 650){
            setSlidesToShow(2)
        }else if(window.innerWidth <= 650){
            setSlidesToShow(1)
        }
    } 

    useEffect(()=>{
        setSlides();
        window.addEventListener("resize", ()=>{setSlides()})
    },[])
    const settings = {
        arrows:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        nextArrow: <NextArrow />,
        prevArrow:<PrevArrow/>,
        responsive:[
            {
                breakpoint:1280,
                settings:{
                    slidesToShow:3,
                }

            },
            {
                breakpoint:1000,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:650,
                settings:{
                    slidesToShow:1,
                }
            },
        ],


    }
  return (
    <div className='container-fluid md:container w-[400px] mx-auto  top-[50px] md:top-[100px] lg:top-[10%]'>
        <div className='top-[1000px]'>
            <h1 className=' uppercase text-[40px] text-left mt-[200px] mb-[50px] leading-8 tracking-wider'>Our Categories</h1>
            <div className='relative mb-20'>
            
                <Slider {...settings}>    
                    {images.map((imgData, index) => <Card key={index} img={imgData.img}/>)}
                </Slider>
            </div>
            <div className='text-center mb-20'>
                <h1 className='text-xm md:text-[50px] uppercase  tracking-widest mb-[6rem]'>One platform for all premium listings</h1>
                <h2 className='text-xm md:text-[40px] uppercase mb-5 tracking-widest leading-[18px]'>Unlimited potential</h2>
            </div>
        </div>
    </div>
    
  )
}

export default MySlider 