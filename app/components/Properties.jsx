import React from 'react'
import Image from 'next/image'
import Propertiesimg1 from "../Images/propertiesimg1.svg"
import Propertiesimg2 from "../Images/propertiesimg2.svg"

function Properties() {
  return (
    <div>
      
      <div className='flex justify-center pt-44 gap-20 bg-[#f9f9f9]'>

      <div>

      <p className="font-bold font-family-Poppins text-[25px] ">Find properties that<br/>match your exact criteria</p>
      <p className='text-[#8b8b8b]'>Body text with explanations</p>
      <Image src={Propertiesimg1}/>
      </div>
        
        <div>
      <p className="font-bold font-family-Poppins text-[25px]">Enhance Team Collaboration with<br/>Real-Time Visual Workflows</p>
      <p className='text-[#8b8b8b] mr-36'>Body text with explanations</p>
      <Image src={Propertiesimg2}/>
      </div>

      </div>

       
     <div>
      <p class="text-black font-semibold font-family-Poppins  m-0 px-3 py-2">Body text with explanations</p>
      <p class="text-secondary fs-6 fw-normal font-family-Poppins m-0 px-3 py-2">Body text with explanations</p>
      <Image src={Whitebox.png}}/>
      </div>
    
     
      


    </div>
  )
}

export default Properties
