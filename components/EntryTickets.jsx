import React from 'react';
import Image from 'next/image';

const EntryTickets = () => {
  return (
    <div className="container ">
      <div className=" absolute top-[950px]  lg:top[1000px]  flex md:gap-x-54 flex-col md:flex-row">
        <div className="text-left justify-left w-[500px] md:w-[565.7px] h-[378px]">
          <Image src="/zimo-logo.png" width={300} height={144} alt="" />
          <div className="h-[185px] leading-8 w-[500px] mt-5 uppercase tracking-wider text-left mb-3">
            <p className="text-[40px] mb-8">one source</p>
            <p className="text-[60px] mb-10">entry tickets</p>
            <p className="text-[20px] mb-5">FOR ALL PREMIUM LISTINGS</p>
          </div>
        </div>
        <div className="items-left md:justify-right w-[500px] h-[400px] md:w-[800px] md:h-[550px]">
          <div
            className="flex flex-col absolute md:justify-end w-[500px] h-[400px]
        md:w-[800px] md:h-[550px] "
          >
            <Image
              src="/65c8a1f0ee7329a44d1812b2f35ced5c.jpg"
              className="rounded-md
            bg-contain bg-no-repeat bg-center
            backdrop-opacity-70 bg-black/40 insert-0 object-cover"
              width={760}
              height={550}
              alt="/"
            />

            <span className="text-xm md:text-3xl uppercase text-center pt-5 tracking-wider">
              let your dreams come true
            </span>
          </div>
        </div>

        {/* <div className='hidden md:mb-0 md:mt-56 w-auto text-right'><span className='md:top-[30px] tracking-wider text-right'>LET YOUR DREAMS FIND YOU</span></div> */}
      </div>
    </div>
  );
}

export default EntryTickets