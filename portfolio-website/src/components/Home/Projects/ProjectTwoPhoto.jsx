import React,{ useState, useEffect } from 'react'
import imgBg1 from "./imgBg1.svg"
import project2 from "./project2.jpg"
import project from "./project.css"
import { Link,Router } from 'react-router-dom'

export default function ProjectOnePhoto() {
  const [rotation, setRotation] = useState(0);


  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newRotation =scrollPosition ? 18 - (scrollPosition * 0.006)  : -9 ; // Adjust the scroll speed
    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className=' left-9 '>
      <div>
        <img src="" alt="" />
      </div>
      <div className='w-[730px] h-[637px] absolute '>
      <div className='   w-[730px] h-[730px] relative -mt-6 mb-14 mr-9 ml-9'>
        <img src={imgBg1} alt="preview" className='  relative' />
      </div>
      </div>
      <div className='max-w-[690px] max-h-[539px] '>
      <div className={`py-8     object-cover  max-w-[650px] max-h-[532px]`}>
        <Link to="/portfolio" className={`max-w-[650px] max-h-[532px]`}>
        <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg" className={`rounded-[45px]  ml-16`     } alt="" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.01s ease-in-out' }} />
        </Link>
      </div>
      </div>
    </div>
  )
}
