import React from 'react'
import Main from './Top/Main'
import Photos from './Top/Photos'

export default function LandingPage() {
  return (
    <div className='Landing flex  flex-row sm:justify-between items-center bg-[#25262a] max-w-[1600px] relative overflow-hidden'>
        <Main/>
        
        <Photos/>
        
    </div>
  )
}
