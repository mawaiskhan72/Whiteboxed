import React from 'react'
import Image from 'next/image'
import PC from "./Images/pc.svg"
import Addsign from "./Images/addsign.png"


function Market() {
  return (
    <div>

      <div className="position-relative flex justify-center pt-60 gap-32">
    <Image className='w-[500px]' src={PC} />

    <div>
        <div>
            <div className="col-12 row">
            <Image src={Addsign} />
                <p className='pt-6 pb-5'><span className="font-bold text-2xl font-family-Poppins">Detailed Listing <br/></span><span className="text-[#d76d3f] text-2xl font-semibold font-family-Poppins">Marketplace</span></p>
                <div className="col-12 row d-rflex">
                    <p className="text-dark fs-6 fw-normal font-family-Poppins">Our curated marketplace makes the search process <br />effortless.  Find the perfect space for your tenants in <br />minutes.</p>
                    <div className="position-relative">
                            <div>
                                <p className="bg-[#d97549]  mt-8 w-[130px] text-white text-sm font-family-Plus flex justify-center rounded-2xl px-2 py-2">SEE NOW</p>
                            </div>                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Market
