import React,{ useState, useEffect } from 'react'
import imgBg from "./imgBg.svg"
import project1 from "./project1.jpg"
import project from "./project.css"
import { Link,Router } from 'react-router-dom'
export default function ProjectOnePhoto() {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newRotation =scrollPosition  ? -14 + (scrollPosition * 0.005)  : -9 ; 
    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='   '>
     
      <div className='   w-[730px] h-[737px]  -mt-5 mb-14 absolute '>
        <img src={imgBg} alt="preview" className='  ' />
      </div>
      
      
      <div className='max-w-[650px] max-h-[539px] '>
      <div className={`py-8     object-cover  max-w-[650px] max-h-[532px]`}>
        <Link to="/portfolio" className={`max-w-[610px] max-h-[532px]`}>
          <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg" className={`rounded-[45px] ml-9 `     } alt="" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s ease-in-out' }} />
        </Link>
      </div>
      </div>
    
    </div>
  )
}
