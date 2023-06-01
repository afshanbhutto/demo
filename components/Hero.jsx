import React from 'react'
import {SlArrowDown} from 'react-icons/sl';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Navbar from './Navbar';
const Hero = () => {
  return (
    <div className='bg-[url("/ad08e64c018e38e3d381ca3f8f1ce858.jpg")] h-screen bg-cover  bg-no-repeat bg-center flex gap-[40%]   flex-col lg:gap-[30%] md:gap-[20%] relative'>
        <div className="absolute insert-0 bg-black/50"></div>
        <Navbar/>
        <div className="container mx-auto px-4 z-10">
        <div className='absolute top-[12%] w-[214pxpx] h-[26px] flex gap-[10px] items-center text-white'>
                    
                    <div><AiOutlineArrowLeft size={20} /></div>
                    <div>Back</div>
                </div>
            <div className="flex flex-col text-left text-white gap-[10px] md:gap-[20px]">
                <div >
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider uppercase'>Discover</h1>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-widest uppercase '>A new world</h1>
                </div>
                <div>
                    <p className='text-gray-500 text-sm md:text-xl tracking-wider uppercase leading-7 text-left'>FOR THOSE WHO WISH FOR MORE... </p>
                </div>
            </div>
            <div className='text-gray-500 flex flex-col absolute inset-x-0 bottom-0 items-center text-center'>
                <div>
                    <p className='tracking-wider leading-10 font-normal'>Bringing the world closer together</p>
                </div>
                <div className='w-[80px] h-[40px]'><SlArrowDown size={40}/></div>
            </div>
        </div>
    </div>
  )
}

export default Hero
