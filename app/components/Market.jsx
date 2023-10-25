import React from 'react'
import Image from 'next/image'
import PC from "../Images/pc.svg"
import Addsign from "../Images/addsign.png"
import Wimage from "../Images/w.svg.svg"
import Image1 from "../Images/image1.svg"
import Image2 from "../Images/image2.svg"
import Image3 from "../Images/image3.svg"


function Market() {
  return (
    <div>

      <div className="position-relative flex justify-center pt-60 gap-32">

      <div className="relative">
    <Image className='w-[620px] relative' src={PC} />
    <div className="absolute top-28 right-52 rounded-[35px] w-[430px] bg-[rgba(255,255,255,0.92)] flex items-center shadow-lg">
        <Image src={Wimage} />
        <div>
            <p className="font-family-Poppins text-[#d76d3f]">
                <span className='text-[#d76d3f] font-semibold'>Lorem ipsum dolor sit amet,</span><br />consectetur adipiscing elit
            </p>
        </div>
    </div>
</div>


        <div>
            <Image src={Addsign} />
                <p className='pt-6 pb-5'><span className="font-bold text-[45px] font-family-Poppins">Detailed Listing <br/></span><span className="text-[#d76d3f] text-[45px] font-semibold font-family-Poppins">Marketplace</span></p>
                <div className="col-12 row d-rflex">
                    <p className="text-dark font-family-Poppins text-[18px]">Our curated marketplace makes the search process <br />effortless.  Find the perfect space for your tenants in <br />minutes.</p>
                    <div className="position-relative">
                            <div>
                                <p className="cursor-pointer bg-[#d97549]  mt-7 w-[170px] text-white text-xl font-family-Plus flex justify-center rounded-[100px] px-2 py-4">SEE NOW</p>
                            </div>                      
                    </div>
                </div>

                 <div className='absolute top-[1100px] right-0'>
    <Image className='ml-16' src={Image1} />
    <Image src={Image2} />
    <Image src={Image3} />
    </div>
            </div>


    </div>
 
</div>
  )
}

export default Market
