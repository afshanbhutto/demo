import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import CustomClock from './CustomClock'
import {FiMenu} from 'react-icons/fi'
import moment from 'moment'
import {AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'
import axios from 'axios'
import ReactCountryFlag from 'react-country-flag'




const Navbar = () => { 
  const [toggle, setToggle] = useState(false);
 
  // for location
  const [currLocation , setCurrLocation] = useState();
  useEffect(()=>{
      getLocation()
  },[])

  const getLocation = async () =>{
    const location = await axios.get('https://geolocation-db.com/json/')
    setCurrLocation(location.data)
  }

  return (
    <div className='container-fluid   static bg-transparent w-full top-0  text-white'>
        <div className="container  flex justify-between py-4 px-4 items-center">
            <div className='flex gap-8 items-center justify-start text-white'>
              <div >
                <Image src="/first-logo.png" width={66} height={50} alt=''/>
              </div>
              <div>
              <Image className='text-white' src="/main-logo.png" width={185} height={50} alt=''/>
              </div>
                <div className='text-white text-xl leading-8 tracking-widest align-baseline uppercase w-[80px] h-[14.7px]' >
                  About
              </div>
              
            </div>
            <div className='hidden md:flex items-center justify-center'>
               <Image src="/white-logo.png" width={204} height={50} alt=''/>
            </div>
            <div className='hidden md:flex justify-end gap-2 items-center w-[570px] h-[39px]'>

              <div  className='flex items-center gap-2 uppercase w-[292px] h-[39px] tracking-wider text-sm'>
                <div className='flex flex-col' >
                <div className='flex text-left justify-center text-sm gap-4 leading-8 tracking-widest'>
                  <div><CustomClock /></div>
                  <div>London</div>
                  <div>United Kingdom</div>
                  {/* <div>{currLocation.country_name}</div> */}
                </div>
                
                <div className='leading-8 text-right'>
                  <p className='text-[#BE9F56] text-xs tracking-widest'>{moment().format('dddd , D MMMM YYYY')}</p>
                </div>
                </div>
                
              </div >
              <div className='flex items-center gap-14'>
              <div>
              <ReactCountryFlag
                countryCode="CN"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="CN"

                style={{
                  width: '2.25rem',
                  height: '1.6rem',
              }}
            />
              </div>
              
              <div>
              <Image src="/lock.png" width={21} height={25} alt='' />
              </div>
             <div>
              <Image src="/login-user.png" width={21} height={25} alt=''/>
              </div>
              </div>
              
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