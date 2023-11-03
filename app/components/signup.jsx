import React from 'react'
import Image from 'next/image';
import Avatar from '/public/Images/avatar.svg';
import Footerimg from '/public/Images/footerimg.png';

function signup() {
  return (

    <div>
    <div  className='flex justify-center mt-6 pt-10 bg-[#f9fafb] max-h-[1200px] max-w-[1150px] mx-auto rounded-xl'>
    <div>

<div>
      <div className='pl-72 pr-10 pb-6'>
        <Image src={Avatar  } />
        </div>
    <div>
    <p className="text-center text-dark fs-6 fw-medium font-family-Poppins font-semibold text-[22px] pb-2">Still have questions?</p>
    <p className="text-center text-secondary fs-6 fw-normal font-family-Poppins text-gray-500 pb-4 text-[20px]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
    </div>
    </div>

    <div className='flex justify-center pb-8'>
<p className="cursor-pointer bg-[#d76d3f]  mt-5 w-[150px] text-white text-xl font-family-Plus flex justify-center rounded-md px-1 py-2">Get in touch</p>
  </div>
    </div>
  </div>

<div className='pt-28 flex gap-24'>
<Image src={Footerimg} />


    <div className="col-9 row pt-24">
        <div className="col-12 row d-flex ">
            <p className="col-12 "><span className="text-dark fs-1 fw-semibold font-family-Poppins font-bold text-[45px]">Let’s level up your <br /></span><span className="text-danger fs-1 fw-semibold font-family-Poppins font-bold text-[45px] text-[#d76d3f]">business</span><span className="text-dark fs-1 fw-semibold font-family-Poppins font-bold text-[45px]">, together</span></p>
            <p className="col-12 pt-4 pb-8"><span className="font-family-Inter text-gray-500 text-[20px]">You can reach us anytime via @</span><span className="text-danger font-family-Inter text-[#d76d3f] text-[20px]">supportwhitebox.com</span></p>
        </div>
        <div className="col-12 row d-flex">
            <div className="col-12 row d-flex">
                <div className="col-12 d-flex">

                        <div className="col-12 row d-flex rounded-sm">
                            <p className="text-dark fs-6 fw-medium font-family-Poppins font-semibold pb-2 ">Name</p>
                            <div className="px-1 py-1 bg-white shadow border border-1 border-success-subtle col-12 align-items-center rounded-xl">
                                <div className="col-11 align-items-center d-flex ">
                                    <p className="text-secondary fs-6 fw-normal font-family-Poppin text-gray-500 pl-3">Your name</p>
                                </div>
                            </div>
                        </div>
                 </div>


<div className="col-12 row d-flex rounded-sm">
    <p className="text-dark fs-6 fw-medium font-family-Poppins font-semibold pb-2 pt-6">Email</p>
    <div className="px-1 py-1 bg-white shadow border border-1 border-success-subtle col-12 align-items-center rounded-xl">
        <div className="col-11 align-items-center d-flex ">
            <p className="text-secondary fs-6 fw-normal font-family-Poppin text-gray-500 pl-3">Your Email</p>
        </div>
    </div>
</div>


<div className="col-12 row d-flex rounded-sm">
    <p className="text-dark fs-6 fw-medium font-family-Poppins font-semibold pb-2 pt-6">Phone Number</p>
    <div className="px-1 py-1 bg-white shadow border border-1 border-success-subtle col-12 align-items-center rounded-xl">
        <div className="col-11 align-items-center d-flex ">
            <p className="text-secondary fs-6 fw-normal font-family-Poppin text-gray-500 pl-3">Your Phone Number</p>
        </div>
    </div>
</div>

<div className="col-12 row d-flex">
<p className="text-dark fs-6 fw-medium font-family-Poppins font-semibold pb-2 pt-6">How can we help?</p>
<div className="px-1 py-1 bg-white rounded-3 shadow border border-1 border-success-subtle col-12 align-items-center">
<p className="text-secondary fs-6 fw-normal font-family-Poppins text-gray-500 pt-2 pl-3 pb-28 ">Tell us a little about the project...</p>
</div>
</div>
</div>
<div>
   <p className="cursor-pointer bg-[#d76d3f] mt-10 text-white text-xl font-family-Plus flex justify-center rounded-xl px-1 py-2">Get Started</p>
   </div>
    </div>
     </div>
</div>
  
</div>
  )
}

export default signup