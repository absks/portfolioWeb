import React, { useEffect } from 'react'
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Navbar from '../Navbar/Navbar';
import LandingPage from './LandingPage';
import ResumePage from './ResumePage';
import ProjectOne from './Projects/ProjectOne'


export default function Home() {

  
  return (
    <div id="home" className='bg-scroll max-w-[1600px] bg-[#2d2e32]'>
        <div>
        <LandingPage/>
          </div>
          <div>
          <ResumePage/>
          </div>
          <div>
            <ProjectOne/>
          </div>
    </div>
  )
}
