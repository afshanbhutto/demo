/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const Card = ({img, imgDesc}) => {
  return (
    <div className='w-[400px] md:w-full'>
        <div>
            <img className='h-[420px] w-[420] object-cover rounded-2xl' width={420} height={420} src={img} alt="team-member" />
            <p class="absolute pl-[8rem] text-[20px] bottom-[2rem] text-white text-center ">{imgDesc}</p>
        </div>
    </div>
  )
}

export default Card