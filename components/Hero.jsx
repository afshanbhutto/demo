import React from 'react'
import {SlArrowDown} from 'react-icons/sl';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Navbar from './Navbar';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="container-fluid  m-0 p-0 ">
<div className='bg-[url("/ad08e64c018e38e3d381ca3f8f1ce858.jpg")] h-[500px] md:h-screen w-[500px] md:w-full  m-0 p-0  bg-cover  bg-no-repeat bg-center flex gap-[30%]   flex-col lg:gap-[30%] md:gap-[20%] relative'>
        <div className="absolute insert-0 bg-black/50  z-20"></div>
        <Navbar/>
        <div className="container mx-auto px-4 z-10">
        <div className='absolute top-[12%] w-[99px] h-[30px] flex gap-2 text-xl leading-8 tracking-widest uppercase items-center text-white'>
                    
                    <div className=''><AiOutlineArrowLeft size={30} /></div>
                    <div>Back</div>
                </div>
            <div className="flex flex-col text-left text-white gap-[10px] md:gap-[20px]">
                <div className='tracking-wider leading-8' >
                    <p className='text-xl md:text-2xl lg:text-3xl  tracking-wider uppercase'>Discover</p>
                </div>
                <div className='tracking-widest leading-8' >
                    <h1 className='text-2xl md:text-3xl lg:text-5xl uppercase '>A new world</h1>
                </div>
                <div className='tracking-wider uppercase leading-7 text-left'>
                    <p className='text-gray-500 text-sm md:text-sm '>FOR THOSE WHO WISH FOR MORE... </p>
                </div>
            </div>
            <div className='text-gray-500 flex flex-col absolute leading-10 inset-x-0 bottom-0 items-center text-center'>
                <div className='leading-10 uppercase mb-6'>
                    <p className='tracking-wider font-normal'>Bringing the world closer together</p>
                </div>
                <Link href={"#about-info-section"}>
                    <div className='w-[80px] h-[40px] text-white'><SlArrowDown size={40}/></div>
                </Link>
                
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Hero
