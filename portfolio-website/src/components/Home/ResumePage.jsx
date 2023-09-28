import React from 'react'
import MySKills from './HireMe/MySKills'
import DesignSide from './HireMe/DesignSide'
export default function ResumePage() {
  return (
    <div className='bg-[#2d2e32] flex flex-row justify-between pt-[160px] pr-24   pb-[130px]'>
       <div>
            <DesignSide/>
       </div>
       <div className=''>
       <MySKills /> 

       </div>
    </div>
  )
}
