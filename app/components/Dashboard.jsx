import React from 'react'
import Image from 'next/image';
import Pipeline from '/public/Images/pipeline.png';
import Listing from '/public/Images/listing.png';
import Calendar from '/public/Images/calendar.png';
import Minuscircle from '/public/Images/minuscircle.svg';
import Pluscircle from '/public/Images/pluscircle.svg';

function Dashboard() {
  return (
    <div className='pt-28'>
      <p className="text-center text-black text-[45px] font-bold font-family-Inter  m-0 px-3 py-2">Dashboard</p>
      <p className="text-center text-black fs-6 fw-normal font-family-Inter  font-semibold">Our Dashboard makes it easy to keep track of your entire day. Save time on repetitive tasks and <br />quickly see where your next potential opportunity lies. </p> 


      <div className='md:flex justify-center gap-14 pt-32'>
        <div className='pt-28'>
        <Image className='w-[800px]' src={Pipeline} />
        <Image className='w-[800px]' src={Listing} />
        </div>

        <div>
        <Image className='w-[350px]' src={Calendar} />
        </div>
      </div>

      
      <div className='pt-20'>
        <p className="text-center text-dark fs-2 fw-semibold font-family-Poppins font-bold text-[36px]">Frequently asked questions</p>
        <p className="text-center text-[#8c93a3] text-xl text-secondary fs-6 fw-normal font-family-Poppins  m-0 px-3 py-2">Everything you need to know about the product and billing.</p>
        </div>


        <div className="row">
  <div className="col-12 flex justify-center pt-10 pb-7">
    <div className="col-11 row">
      <div className='flex gap-56 xl:gap-[500px] lg:gap-[500px]'>
        <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 px-3 py-2 text-[20px] font-bold">Is there a free trial available?</p>
        <Image className='cursor-pointer' src={Minuscircle} />
      </div>
      <p className="fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2 text-gray-500 xl:text-[18px] lg:text-[18px]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, <br />personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
    </div>
    
  </div>
  <hr className="bg-light max-w-[820px] mx-auto pb-6 pt" />
  

  <div className="flex justify-center gap-56 xl:gap-[500px] lg:gap-[500px] pb-7">
    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 px-3 py-2 text-[20px] font-bold">Can I change my plan later?</p>
    <Image className='cursor-pointer'src={Pluscircle} />
  </div>

  <hr className="bg-light max-w-[820px] mx-auto pb-6 pt" />

  <div className="flex justify-center gap-[465px] pb-7">
    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 px-3 py-2 text-[20px] font-bold">What is your cancellation policy?</p>
    <Image className='cursor-pointer'src={Pluscircle} />
  </div>

  <hr className="bg-light max-w-[820px] mx-auto pb-6 pt" />

  <div className="flex justify-center gap-[412px] pb-7">
    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 px-3 py-2 text-[20px] font-bold">Can other info be added to an invoice?</p>
    <Image className='cursor-pointer'src={Pluscircle} />
  </div>

  <hr className="bg-light max-w-[820px] mx-auto pb-6 pt" />

  <div className="flex justify-center gap-[570px] pb-7">
    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 px-3 py-2 text-[20px] font-bold">How does billing work?</p>
    <Image className='cursor-pointer'src={Pluscircle} />
  </div>

  <hr className="bg-light max-w-[820px] mx-auto pb-6 pt" />

  <div className="flex justify-center gap-[450px] pb-7">
    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 px-3 py-2 text-[20px] font-bold">How do I change my account email?</p>
    <Image className='cursor-pointer'src={Pluscircle} />
  </div>
</div>



    </div>
  )
}

export default Dashboard