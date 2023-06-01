import React from 'react';
import Image from 'next/image';

const Card = ({img}) => {
  return (
    <div className='w-[100%] shadow-xl'>
        <div>
            <Image className='h-[250px] w-[100%] object-cover rounded-2xl' width={420} height={420} src={img} alt="team-member" />
        </div>
    </div>
  )
}

export default Card