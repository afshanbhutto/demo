import React from 'react';
import Image from 'next/image';
import {AiOutlineArrowRight} from 'react-icons/ai'
const LastSection = () => {
  return (
    <div className='container-fluid bg-[url("/a127809b20d09f96783f575dbf41f49f.jpg")] h-[100vh] top-[1000px] bg-opacity-70 bg-cover  bg-no-repeat bg-center flex items-center relative'>
        <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col md:justify-end  items-center text-center md:text-right text-white">
                <div className='w-auto absolute  md:left-[60%] top-[10%] '>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider uppercase mt-0'>Personalized for you</h1>
                    <div className='absolute w-auto md:w-[525px] h-[108px]text-right mt-5'>
                    <p className='text-white text-sm md:text-xl tracking-wider leading-7 text-center md:text-left '>
                    Delivering thousands of personalised alerts everyday, our USERS can be first in line when that opportunity of a lifetime is here.
                    </p>
                </div>
                </div>
                
            </div>
            <div className='flex  md:justify-between items-center'>
                <div className='hidden md:block'>
                    <Image src={'/white-logo.png'} width={400} height={130} alt=""/>
                </div>
                <div className='w-[214pxpx] h-[26px] flex gap-[10px] md:items-center text-white'>
                    <div>Create User</div>
                    <div><AiOutlineArrowRight size={40} /></div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default LastSection