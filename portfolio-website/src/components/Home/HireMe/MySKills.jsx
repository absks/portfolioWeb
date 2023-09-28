import React from 'react';
import "aos/dist/aos.css";
import AbubakarResume from './AbubakarResume.pdf'

export default function MySKills() {
  return (
    <div className=' lg:pt-32 ml-12 mainTop  flex flex-col    '>
       <div className='pb-4'>
       <div className="flex ">
        <span className=" xl:border-t-2 border-t  w-4 xl:mt-3  border-[#327a56] border-solid flex font-light"></span>
        <p className="leading-none text-center text-[#64f4ab] pl-[5px] font-semibold xl:text-lg text-base">
          My Skills
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" >
      <div className="flex flex-col  lg:mt-3 mt-1 mb-4 ">
      <h1 className="xl:text-[48px] leading-[58px] lg:text-[48px] sm:text-[25px] text-2xl  text-[#fff] font-semibold">Why Hire Me For Next Project?</h1></div>
      <div className="justify-center lg:mt-3 mt-1 mb-4">
      <p className="  sm:text-lg text-sm  font-light text-[#fff]  text-left sm:max-w-lg max-w-sm mb-4">
      The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.
      </p>
      </div>
      </div>
       </div>
       
      
      
      <a href={AbubakarResume} download={AbubakarResume.pdf} target='_blank'>
        <button data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="500"
              data-aos-easing="cubic-bezier(.165,.84,.44,1)"
              className="text-gray-900 bg-gradient-to-r from-[#ffcb1c] via-[#ffcb1c] to-[#ffb028] hover:bg-gradient-to-l  font-medium rounded-[14px] px-[45px] pt-[16px] pb-[15px] text-center font-montserrat font-sans text-[18px] truncate">Download CV</button></a>
    </div>
  )
}
