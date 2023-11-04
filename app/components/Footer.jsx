import React from 'react'
import Image from 'next/image';
import Framefooter from "/public/Images/framefooter.png"
import Social from "/public/Images/Social.svg"

function Footer() {
  return (

    <div className='bg-[#b8623c]'>
    <div className='bg-[#b8623c] md:flex gap-40 justify-center pt-24 pb-16'>

      <div className='text-white flex justify-center gap-20'>
        
    <Image src={Framefooter}></Image>
    <div className='md:flex pt-5 justify-center gap-20'>
    <p>Home</p>
    <p>Contact us</p>
    <p>Signup</p>
    <p>Watch Demo</p>
    </div>
    </div>

    <div className='pt-4 pl-4 cursor-pointer'>
    <Image src={Social}></Image>
    </div>

    </div>
    <hr className="bg-light max-w-[1140px] mx-auto pb-14" />

    <p class="text-center text-success-subtle fs-6 fw-normal font-family-Poppins text-[#d6d6d6] pb-4 m-0 px-3 py-2">© Copyright 2022, All Rights Reserved by <br />Whiteboxed</p>
    </div>

  )
}

export default Footer