import React from 'react';
import design from './design.css';
import box from './box.svg';
import pen from './pen.svg';
import layers from './layers.svg'
import figma from './figma.svg'


export default function DesignSide() {
  return (
    <div className='ml-[25px] flex flex-col max-w-[90%]' >
      <div className='flex '>
      <div className=' hover:bg-[#64f4ab]    flex flex-col bg-box  justify-center mb-[30px] mr-[15px] ' data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="1000">
        <div className='rounded-full-box mb-4'>
        <img src={box} alt="box" className='overflow-visible ' />
        </div>
        <div className=''>
        <h1 className='text-3xl text-white font-bold mb-4'>Product Design</h1>
        </div>
        <div>
          <p className='text-lg font-normal text-[#e8e8e8] text-center '>
						The technological revolution is changing aspect</p>
        </div>
      </div>

      <div className='hover:bg-[#64f4ab]  flex flex-col bg-box  items-center justify-center mt-[30px] ml-[15px] ' data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="1050">
        <div className=' mb-4 rounded-full-box'>
          <img src={pen} alt="pen" className='  overflow-visible  '/>
        </div>
        
        <div className=''>
        <h1 className='text-3xl text-white font-bold mb-4'>Logo Design</h1>
        </div>
        <div>
          <p className='text-lg font-normal text-[#e8e8e8] text-center'>
						The technological revolution is changing aspect</p>
        </div>
      </div>
      </div>
      
      <div className='flex '>
      <div className=' hover:bg-[#64f4ab]  rounded-2xl flex flex-col items-center mb-[30px] mr-[15px] bg-box' data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="1100">
        <div className='mb-4 rounded-full-box'>
        <img src={layers} alt="layers" className='overflow-visible '/>

        </div>
        
        <div className=''>
        <h1 className='text-3xl text-white font-bold mb-4'>UI Design</h1>
        </div>
        <div>
          <p className='text-lg font-normal text-[#e8e8e8] text-center'>
						The technological revolution is changing aspect</p>
        </div>
      </div>
      

      <div className='bg-[#25262a] hover:bg-[#64f4ab] py-14 px-5 rounded-2xl flex flex-col items-center mt-[30px] ml-[15px] bg-box' data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="1150">
        <div className='rounded-full-box mb-4'>
          <img src={figma} alt="box" className='overflow-visible '/>
        </div>
        
        <div className=''>
        <h1 className='text-3xl text-white font-bold mb-4'>Icon Design</h1>
        </div>
        <div>
          <p className='text-lg font-normal text-[#e8e8e8] text-center'>
						The technological revolution is changing aspect</p>
        </div>
      </div>
      </div>
    </div>
  )
}
