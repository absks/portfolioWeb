import React from 'react'
import Detail from './Detail'
import ProjectOnePhoto from './ProjectOnePhoto'
import DetailTwo from './DetailTwo'
import ProjectTwoPhoto from './ProjectTwoPhoto'
export default function ProjectOne() {
  return (
    <div className='bg-[#2d2e32] '>
        <div className='bg-[#2d2e32] flex flex-row justify-between pt-[160px] pr-24   pb-[130px] '>
            <div>
                <Detail/>
            </div>
            <div>
                <ProjectOnePhoto/>
            </div>
        </div>
        <div className='bg-[#2d2e32] flex flex-row justify-between pt-[160px] pr-12   pb-[130px]'>
            <div className=''></div>
        
            <div>
                <ProjectTwoPhoto />
            </div>
            <div className='ml-12'>
                <DetailTwo/>
            </div>
        </div>
        
    </div>
  )
}
