import React from 'react'
import Image from 'next/image'
import HeaderLogo from "../../public/Images/headerlogo.svg"
import Man1 from "../../public/Images/man1.svg"
import Man2 from "../../public/Images/man2.svg"
import Woman1 from "../../public/Images/woman1.svg"
import Woman2 from "../../public/Images/woman2.svg"

function Header() {
  return (
    <div>

   <div className="sticky top-0 z-50 px-14 py-6 flex justify-between">
    <Image className="col-xxl-2" src={HeaderLogo} />
    <div className="flex gap-4 cursor-pointer">
        <div className="px-1 py-1 col-lg-1 justify-content-center align-items-center d-flex">
            <p className="text-black font-family-Poppins text-[18px] font-semibold px-3 py-2">Contact Us</p>
        </div>
        <div className="px-1 py-1 col-lg-1 justify-content-center align-items-center d-flex">
            <p className="text-black font-family-Poppins text-[18px] font-semibold pt-2">Log In</p>
        </div>
        <div className="px-1 py-1 bg-danger rounded-5 col-lg-1 row justify-content-center align-items-center d-flex">
            <p className="bg-[#d97549] rounded-[40px] text-sm text-white font-family-Poppins px-8 py-2">Sign Up</p>
        </div>
    </div>
</div>


<div className="pt-20">
    <div className=" align-items-center d-flex">
        <p className="text-center font-family-Inter font-bold text-[55px]">Lease CRE <br/>Like Never Before</p>
        <p className="text-center font-family-Inter text-[19px] pt-3">WhiteBoxed is an exclusive all-in-one CRE broker platform that <br/>helps you close deals faster than ever.</p>
    </div>

    <div className="flex justify-center items-center">
  <div className="pt-8 w-[190px]">
    <p className="text-center cursor-pointer bg-[#d97549] rounded-md text-sm text-white font-family-Inter px-2 py-5">Watch Video</p>
  </div>
</div>

<div class="flex justify-center pt-11 gap-3">
    <Image src={Man1}></Image>
    <Image src={Man2}></Image>
    <Image src={Woman1}></Image>
    <Image src={Woman2}></Image>
</div>

</div>




    </div>
    
  )
}

export default Header
