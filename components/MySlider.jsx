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
    <div className='container mx-auto relative top-[250px] md:top-[400px] lg:top-[10%]'>
        <div className=''>
            <h1 className='font-semibold text-[40px] text-left mt-[20px] mb-[50px]'>Categories</h1>
            <div className='relative'>
            
                <Slider {...settings}>    
                    {images.map((imgData, index) => <Card key={index} img={imgData.img}/>)}
                </Slider>
            </div>
            <div className='text-center pt-10'>
                <h1 className='text-xm md:text-2xl uppercase mb-5 tracking-widest font-semibold'>One platform for all premium listings</h1>
                <h2 className='text-xm md:text-2xl uppercase mb-5 tracking-widest'>Unlimited potential</h2>
            </div>
        </div>
    </div>
    
  )
}

export default MySlider 