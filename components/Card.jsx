import React from 'react';
import Image from 'next/image';

const Card = ({img}) => {
  return (
    <div className='w-[400px] md:w-full'>
        <div>
            <Image className='h-[420px] w-[420] object-cover rounded-2xl' width={420} height={420} src={img} alt="team-member" />
        </div>
    </div>
  )
}

export default Card