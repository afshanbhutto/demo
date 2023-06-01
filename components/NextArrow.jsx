import React from 'react'
import {BsChevronRight} from 'react-icons/bs';
const NextArrow = ({onClick}) => {
  return (
    <div className='absolute right-0 -top-[80px]' onClick={onClick}>
        <div className="grid w-[50px] h-[50px] rounded-full place-items-center cursor-pointer">
            <BsChevronRight size={40}/>
        </div>
    </div>
  ) 
}

export default NextArrow