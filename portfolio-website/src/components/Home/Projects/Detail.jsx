import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import arrow from "./arrow.png"


export default function Detail() {
  return (
    <div className=' lg:pt-32 ml-12 mainTop  flex flex-col    '>
    <div className='pb-4'>
    <div className="flex items-center">
     <span className=" xl:border-t-2 border-t  w-4   border-[#327a56] border-solid flex font-light"></span>
     <p className="leading-none text-center text-[#64f4ab] pl-[5px] font-semibold xl:text-lg text-base">
     Project 1
     </p>
   </div>
   <div data-aos="fade-up" data-aos-duration="1500" >
   <div className="flex flex-col  lg:mt-3 mt-1 mb-4 ">
   <a href='/portfolio' className="xl:text-[48px] leading-[58px] lg:text-[48px] sm:text-[25px] text-2xl  text-[#fff] font-semibold">Branding Nice Studio</a></div>
   <div className="justify-center lg:mt-3 mt-1 mb-4">
   <p className="  sm:text-lg text-sm  font-light text-[#fff]  text-left sm:max-w-lg max-w-sm mb-4">
   The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.
   </p> 
   </div>
   </div>
    </div>
    <div className='flex flex-col'>
     <a href="/" className='flex items-center'><img src={arrow} alt="arrow" className='w-[20px] h-[18px] mr-[30px] ' /><span className='text-lg font-normal text-[#fecd1a] font-mono tracking-[0.54px]'>Read More</span></a>   
    </div>
    
   
 </div>
  )
}
