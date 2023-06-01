import React from 'react'

import {BsChevronLeft} from 'react-icons/bs';
const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute right-[80px] -top-[80px]' onClick={onClick}>
        <div className="grid w-[50px] h-[50px] rounded-full place-items-center cursor-pointer">
            <BsChevronLeft size={40}/>
        </div>
    </div>
  )
}

export default PrevArrow