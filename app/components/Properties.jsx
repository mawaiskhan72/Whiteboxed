import React from 'react';
import Image from 'next/image';
import Propertiesimg1 from '/public/Images/propertiesimg1.svg';
import Propertiesimg2 from '/public/Images/propertiesimg2.svg';
import whitebox from '/public/Images/whitebox.png';
import Macbook from '/public/Images/Macbook.png';

function Properties() {
  return (
    <div>
      <div className="md:flex justify-center pt-44 xl:gap-24 lg:gap-28 bg-[#f9f9f9]">
        <div>
          <p className="font-bold font-family-Poppins text-[25px]">
            Find properties that<br /> match your exact criteria
          </p>
          <p className="text-[#8b8b8b]">Body text with explanations</p>
          <Image src={Propertiesimg1} />
        </div>

        <div>
          <p className="font-bold font-family-Poppins text-[25px]">
            Enhance Team Collaboration with<br /> Real-Time Visual Workflows
          </p>
          <p className="text-[#8b8b8b] mr-36">Body text with explanations</p>
          <Image src={Propertiesimg2} />
        </div>
      </div>

      <div className='bg-[#f9f9f9] pb-14'>
      <div className='pt-24 flex justify-center mr-64'>
        <div >
        <p className="text-black font-semibold font-family-Poppins text-2xl">
          Body text with explanations
        </p>
        <p className="text-secondary text-[#a6a6a6] fs-6 fw-normal font-family-Poppins text-sm pb-3">
          Body text with explanations
        </p>
        </div>
        </div>
       
       <div className='flex justify-center'>
        <Image src={whitebox} />
        </div>
        </div>



        <div className="md:flex  justify-center gap-20 pt-32">
    <div className="position-relative">
        <div className="top-0 position-absolute">
        </div>
        <Image src={Macbook} />
    </div>
    <div className="col-xl-4 align-items-center d-flex">
        <div className="col-12 row pt-16">
            <p className="col-8 m-0 px-3 py-2"><span className="text-dark fs-2 fw-bold font-family-Poppins text-[30px] font-bold">A CRM Tailored <br/>to </span><span className="text-danger fs-2 fw-bold font-family-Poppins text-[#d76d3f] text-[30px]  font-bold">Brokers</span></p>
            <div className="col-12 row d-flex">
                <p className="text-dark text-md fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2 ">Put the spreadsheets to rest. It’s time to use a tool <br />that helps you keep track of your listings and tenants <br />in one place. Our sophisticated CRM helps you stay <br />on top of your every move.</p>
                <div className="p-1 bg-danger rounded-5 col-5 justify-content-center align-items-center d-flex">
                <div>
                  <p className="cursor-pointer bg-[#d76d3f]  mt-5 w-[150px] text-white text-xl font-family-Plus flex justify-center rounded-[100px] px-1 py-2">SEE NOW</p>
                  </div>      
                </div>
            </div>
        </div>
    </div>
</div>
     
    </div>
  );
}

export default Properties;

