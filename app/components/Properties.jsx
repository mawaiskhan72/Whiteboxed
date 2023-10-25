import React from 'react'
import Image from 'next/image'
import Propertiesimg1 from "../Images/propertiesimg1.svg"
import Propertiesimg2 from "../Images/propertiesimg2.svg"

function Properties() {
  return (
    <div>
      
      <div className='flex justify-center pt-44 gap-[400px] bg-[#f9f9f9]'>
      <div>
      <p className="font-bold font-family-Poppins text-[25px] ">Find properties that<br/>match your exact criteria</p>
      <p className='text-[#8b8b8b]'>Body text with explanations</p>
      </div>
      <div>
      <p className="font-bold font-family-Poppins text-[25px]">Enhance Team Collaboration with<br/>Real-Time Visual Workflows</p>
      <p className='text-[#8b8b8b]'>Body text with explanations</p>
      </div>
      </div>

      <div className='flex justify-center bg-[#f9f9f9] gap-8 pt-10'>
      <div>
        <Image src={Propertiesimg1}/>
      </div>

      <div>
        <Image src={Propertiesimg2}/>
      </div>
      </div>

    </div>
  )
}

export default Properties
