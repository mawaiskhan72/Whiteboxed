import React from 'react'
import Image from 'next/image'
import HeaderLogo from "/public/Images/headerlogo.svg"
import Man1 from "/public/Images/man1.svg"
import Man2 from "/public/Images/man2.svg"
import Woman1 from "/public/Images/woman1.svg"
import Woman2 from "/public/Images/woman2.svg"
import Humburger from "/public/Images/humburger.png"

function Header() {
  return (
    <div>

   <div className="sticky top-0 z-50 px-14 py-6 flex justify-between">
    <Image src={HeaderLogo} />
    <div className="flex md:gap-8 lg:gap-8 xl:gap-4 cursor-pointer">
  <div className="sm:hidden md:hidden hidden lg:block xl:block px-1 py-1 col-lg-1 justify-content-center align-items-center d-flex">
    <p className="text-black font-family-Poppins text-[18px] font-semibold px-3 py-2">Contact Us</p>
  </div>
  <div className="sm:hidden md:hidden hidden lg:block xl:block px-1 py-1 col-lg-1 justify-content-center align-items-center d-flex">
    <p className="text-black font-family-Poppins text-[18px] font-semibold pt-2">Log In</p>
  </div>
  <div className="sm:hidden md:hidden hidden lg:block xl:block items-center mb-4 py-1 bg-danger rounded-5 col-lg-1 row justify-content-center align-items-center d-flex">
            <p className="bg-[#d97549] rounded-[40px] text-sm text-white font-family-Poppins px-8 py-2">Sign Up</p>
        </div>
<div className="flex md:gap-8  sm:block md:block lg:hidden xl:hidden cursor-pointer">
  <Image src={Humburger}/>
</div>

</div>
</div>


<div className="pt-20">
    <div className=" align-items-center d-flex">
        <p className="text-center font-family-Inter font-bold text-[30px] sm:text-[45px] md:text-[45px] lg:text-[55px] xl:text-[55px]">Lease CRE <br/>Like Never Before</p>
        <p className="text-center font-family-Inter text-[10px] sm:text-[12px] md:text-[15px] lg:text-[19px] xl:text-[19px] pt-3">WhiteBoxed is an exclusive all-in-one CRE broker platform that <br/>helps you close deals faster than ever.</p>
    </div>

    <div className="flex justify-center items-center">
  <div className="pt-8 w-[190px]">
    <p className="text-center cursor-pointer bg-[#d97549] rounded-md text-sm text-white font-family-Inter px-2 py-5">Watch Video</p>
  </div>
</div>

<div className="flex justify-center pt-11">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
    <div className="flex justify-center">
      <Image src={Man1} />
    </div>
    <div className="flex justify-center">
      <Image src={Man2} />
    </div>
    <div className="flex justify-center">
      <Image src={Woman1} />
    </div>
    <div className="flex justify-center">
      <Image src={Woman2} />
    </div>
  </div>
</div>

</div>
    </div>
    
  )
}

export default Header
