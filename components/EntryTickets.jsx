import React from 'react';
import Image from 'next/image';

const EntryTickets = () => {
  return (
    <div className="container mx-auto">
      <div className=' relative top-[1200px] md:top-[1100px] lg:top[1300px] flex md:flex-col'>
      <div className="left mt-20">
        <Image src="/zimo-logo.png" width={436} height={153}  alt=''/>
        <div className='h-[185px] leading-8 w-[589px] mt-5 uppercase tracking-wider text-left mb-3'>
                    <p className='text-[40px] mb-8'>one source</p>
                    <p className='text-[60px] mb-10'>entry tickets</p>
                    <p className='text-[20px] mb-5'>FOR ALL PREMIUM LISTINGS</p>
        </div>
        </div>
        <div className='flex flex-col absolute md:left-[600px] lg:left[100%] 
        md:w-[850px] md:h-[550px] w-auto'>
            <Image src="/65c8a1f0ee7329a44d1812b2f35ced5c.jpg"
            className='rounded-md
            bg-contain bg-no-repeat bg-center
            backdrop-opacity-70 bg-black/40 insert-0 object-cover'
            width={850} height={550} alt="/"/>

<span className='text-xm md:text-3xl uppercase text-center pt-5 tracking-wider'>let your dreams come true</span>
            
        </div>
        {/* <div className='hidden md:mb-0 md:mt-56 w-auto text-right'><span className='md:top-[30px] tracking-wider text-right'>LET YOUR DREAMS FIND YOU</span></div> */}
      </div>
       
    </div>
  )
}

export default EntryTickets