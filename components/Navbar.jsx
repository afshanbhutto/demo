import React, { useState } from 'react'
import Link from 'next/link'
import {BiLockAlt} from 'react-icons/bi'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'
const Navbar = () => { 
  const [toggle, setToggle] = useState(false);
  return (
    <div className='static bg-transparent w-[100%] top-0 z-20 text-white'>
        <div className="container mx-auto flex justify-between py-4 px-4 items-center">
            <div className='flex gap-1 items-center text-white'>
              <div className='flex flex-col items-center pr-5'>
               {/* <div className='w-[40px] h-[3px] text-white bg-white my-1'></div> */}
                <Image src="/first-logo.png" width={66} height={50} alt=''/>
                {/* <div className='w-[40px] h-[3px] text-white bg-white mt-1'></div> */}
              </div>
              <Image className='text-white' src="/main-logo.png" width={185} height={50} alt=''/>
              
                <div className='text-white text-xs mb-0 pb-0 pl-1 align-baseline uppercase w-[80px] h-[14.7px]' >About</div>
              
            </div>
            <div className='hidden lg:flex'>
               <Image src="/white-logo.png" width={204} height={50} alt=''/>
            </div>
            <div className='hidden md:flex gap-8 items-center'>

              <div  className='flex flex-row items-center gap-2 uppercase w-[292px] h-[38px] tracking-wider text-sm'>
                <div>
                <div className='flex text-sm gap-2'>
                  <div className='text-left'>17-23 London United Kingdom</div>
                </div>
                <div>
                  <p className='text-yellow-700 text-xs'>Sunday 12 Feburary 2023</p>
                </div>
                </div>
                <div>
                <Image src="/flag.png" width={37} height={25} alt=''/>
                </div>
              </div >
              <Image src="/lock.png" width={21} height={25} alt='' />
              <Image src="/login-user.png" width={21} height={25} alt=''/>
            </div>
            {toggle ? (
                <AiOutlineClose size={38} onClick={()=>setToggle(!toggle)} className='md:hidden block'/>
            ):(
                <FiMenu size={38} onClick={()=>setToggle(!toggle)} className='md:hidden block'/>
            )}
        </div>
              {/* Responsiveness for menu */}
        <div className={`duration-300 md:hidden flex flex-col
                         w-[80%] h-screen fixed bg-black text-white top-[0px] 
                         ${toggle?`left-[0]`:`left-[-100%]`}`}>
              <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
               <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
               <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
        </div>
    </div>
  )
}

export default Navbar