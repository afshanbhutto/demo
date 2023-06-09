import React from 'react'
import Image from 'next/image';
import { SlArrowDown} from 'react-icons/sl'
import Link from 'next/link';


const AboutInfo = () => {
  return (
    <div className="container w-[500px] relative flex flex-col h-screen md:w-full    mb-54 mt-8">
      
        <div className="flex items-center justify-center  uppercase h-[14.7px]  w-[500px] md:w-full mt-2 mb-4 ">
                <div className='text-sm md:text-xl self-center md:tracking-[4px]] '>A real estate and property platform that is changing the world</div>
        </div>
        <div>
        <div className="flex mx-auto md:flex-col pt-5 md:pt-2  justify-center relative">
            <div className='top-[100px] md:absolute text-center md:text-left md:w-[500px] h-[200px] uppercase'>
                <h3 className='tracking-[1px] text-2xl'>A revolutionary platform</h3>
                <h1 className='tracking-[3px] text-4xl font-medium'>Entries - sellers</h1>
                <h1 className='tracking-[8px] text-5xl font-semibold'>WorldWide</h1>
            </div>
            <div className='w-auto absolute flex flex-col top-[100px] bottom-0 md:right-0 md:w-[500px] items-center'>
                 <Image src="/zimo-about.png" width={300} height={120}  className='mt-28 md:mt-20' alt=''/>
                 <div className='h-[14.7px] leading-10 md:w-[650px] mt-5 uppercase tracking-[2px] text-center'>
                    <p className=''>Connecting users from accross te globe</p>
                    <p className=''>to faciliate lifes most important</p>
                    <p className=''>personal transactions</p>
                 </div>
            </div>
            <div className="flex flex-col absolute top-[520px] md:top-[300px] text-center md:text-left">
              <div className='w-auto md:w-[558px] h-[49px] mb-2'>
                <h1 className='text-2xl md:text-4xl leading-5 tracking-[2px] md:text-left'>THE BEST OF THE BEST</h1>
              </div>
              <div className='w-auto md:w-[580px] h-[108px] leading-10 tracking-wide'>
                <span className='font-normal text-xs md:text-sm  text-center md:text-left  '>
                COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND MODERATION TEAM SELECTS 
                THE HIGHEST QUALITY LISTINGS ON THE MARKET FROM ACROSS THE WORLD.
                </span>
              </div>              
            </div>
            <div className=' flex flex-col absolute items-center inset-x-0 md:top-[500px] lg:top-[530px] text-center justify-center '>
        <Link href={'#last-section'}>
                <SlArrowDown className='w-[80px] h-[40px] text-black scroll-smooth' />
              
              </Link>
        </div>
        </div>
        
        </div>
        
        
        
    </div>
  )
}

export default AboutInfo