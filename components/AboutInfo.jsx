import React from 'react'
import Image from 'next/image';
import { SlArrowDown} from 'react-icons/sl'


const AboutInfo = () => {
  return (
    <div className="container mx-auto md:mb-56 ">
        <div className="flex items-center justify-center  uppercase h-[14.7px]  w-[100%] mt-5 mb-8 ">
                <div className='text-sm md:text-xl self-center md:mtracking-wider '>A real estate and property platform that is changing the world</div>
        </div>
        <div>
        <div className="flex mx-auto md:flex-col pt-5 md:pt-10 relative">
            <div className='top-[100px] md:absolute text-center md:text-left md:w-[600px] h-[200px] uppercase'>
                <h3 className='tracking-widest text-2xl'>A revolutionary platform</h3>
                <h1 className='tracking-[0.36rem] text-4xl font-medium'>Entries - sellers</h1>
                <h1 className='tracking-[0.7rem] text-5xl font-semibold'>WorldWide</h1>
            </div>
            <div className='w-auto absolute flex flex-col top-[100px] bottom-0 right-0 md:w-[650px] items-center'>
                 <Image src="/Group-4743.png" width={390} height={120}  className='mt-28 md:mt-20' alt=''/>
                 <div className='h-[14.7px] leading-10 md:w-[650px] mt-5 uppercase tracking-wider text-center'>
                    <p className=''>Connecting users from accross te globe</p>
                    <p className=''>to faciliate lifes most important</p>
                    <p className=''>personal transactions</p>
                 </div>
            </div>
            <div className="flex flex-col absolute top-[520px] md:top-[400px] text-center md:text-left">
              <div className='w-auto md:w-[558px] h-[49px] mb-8'>
                <h1 className='text-2xl md:text-4xl leading-5 tracking-wide md:text-left'>THE BEST OF THE BEST</h1>
              </div>
              <div className='w-auto md:w-[580px] h-[108px] '>
                <span className='font-normal text-sm md:text-xm leading-10 text-center md:text-left tracking-wide '>
                COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND MODERATION TEAM SELECTS 
                THE HIGHEST QUALITY LISTINGS ON THE MARKET FROM ACROSS THE WORLD.
                </span>
              </div>

              <div className='absolute mx-auto w-[100%] h-[40px] top-[250px] md:left-[78%] flex items-center justify-center '><SlArrowDown className='self-center' size={40}/></div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default AboutInfo