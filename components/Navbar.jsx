/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import CustomClock from './CustomClock'
import {FiMenu} from 'react-icons/fi'
import moment from 'moment'
import {AiOutlineClose} from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
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
    <div className='container-fluid   static bg-transparent w-full top-0  text-white  child-div grid grid-cols-3  sm:pt-[20px] items-center   justify-between   pt-[2%]'>
        
            <div className='flex  items-center justify-center text-white'>
              
                <img src="/first-logo.png"  alt='' className='  md:w-[65.96px] w-[25px] md:mr-[39px] mr-2 h-[20px] md:h-[50px] '/>
              
             
              <img className='text-white  hidden md:flex md:w-[184.9px] w-[25px] h-[20px] md:h-[50px]  md:mr-[39px] mr-3  ' src="/main-logo.png" alt=''/>
              
                <p className=' text-white uppercase sm:mt-1   mt-[25px] text-xs tracking-[2px] ' >
                  About
              </p>
              
            </div>
            <div className='flex justify-center'>
               <img src="/white-logo.png" className='  md:w-[204.38px]  w-[100px] h-[auto]  ' alt=''/>
            </div>
            <div className='flex justify-end  items-center'>

              <div  className='hidden md:flex uppercase  tracking-[2px] text-sm text-end'>
                <div className='flex flex-col' >
                <div className='flex text-left justify-center text-sm gap-4 leading-8 tracking-widest'>
                  <CustomClock />
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
            <div className=' mt-[30px]  text-white flex items-center  justify-center'>
<button className='text-white flex '>
<div className='w-[22px] mt-1 md:mt-2 mr-2  h-[16px] '><AiOutlineArrowLeft size={30} /></div>
                    <p className=' uppercase text-[17px] md:text-[22px] tracking-[4px] '>
Back
                    </p>

</button>
            </div>
            {/* {toggle ? (
                <AiOutlineClose size={38} onClick={()=>setToggle(!toggle)} className='md:hidden block'/>
            ):(
                <FiMenu size={38} onClick={()=>setToggle(!toggle)} className='md:hidden block'/>
            )} */}
        </div>
              // {/* Responsiveness for menu */}
        // {/* <div className={`duration-300 md:hidden flex flex-col
        //                  w-[80%] h-screen fixed bg-black text-white top-[0px] 
        //                  ${toggle?`left-[0]`:`left-[-100%]`}`}>
        //       <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
        //        <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
        //        <Link href='/' className="hover:text-gren-700 py-5">About us</Link>
        // </div> */}
    
  )
}

export default Navbar