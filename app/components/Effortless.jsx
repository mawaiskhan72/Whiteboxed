import React from 'react'
import Image from 'next/image'
import Setting from "/public/Images/Setting.svg"
import Mbl1 from "/public/Images/mbl1.svg"
import Mbl2 from "/public/Images/mbl2.svg"
import Dots from "/public/Images/Dots.png"
import Attachpics from "/public/Images/attachpics.png"
import Pen from "/public/Images/pen.svg"

function Effortless() {
  return (
    <div>

      <div className='pt-40'>
      <div className='pl-[125px] absolute top-[1840px]'>
        <Image className='pb-5' src={Setting}/>
      </div>
      <div className='flex justify-center gap-40'>
      <div className='pt-60'>
      <p  className='text-[39px] font-bold'>Effortless <spam className="text-[#d97549]">Teamwork</spam></p>
      <p className='pt-5 text-[18px]'>Our curated marketplace makes the search process <br />effortless.  Find the perfect space for your tenants in <br />minutes.</p>
      </div>
      
      <div  className='flex gap-6'>
      <div>
        <Image src={Mbl1}/>
      </div>
      <div className='pt-36'>
      <Image src={Mbl2}/>
      </div>
      </div>
      </div>
      </div>

      <div className='bg-[#f9f9f9]'>
        <div className='absolute top-[2200px] left-0 right-2'>
          <Image src={Dots}/>
        </div>

<div className='flex justify-center pt-32 gap-40 mt-4 '>
<div className='bg-[#f1e1da] rounded-[40px]'>
<Image src={Attachpics}/>
</div>
<div className='pt-28'>
  <Image src={Pen}/>
  <p  className='text-[45px] pt-4 pb-4 font-bold'>Instant<spam className="text-[#d97549]">Surveys</spam></p>
  <p className='text-[#555557] text-[18px]'>Get your tenants their spaces faster with our instant <br />surveys. Create and distribute high-end, custom <br />branded content for your clients with just a few clicks. </p>
</div>
</div>

      </div>
    </div>
  )
}

export default Effortless
