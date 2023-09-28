import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Id from './Id.png';
import AI from './AI.png';
import Ps from './Ps.png';
import XD from './XD.png';



export default function Photos() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const maxScroll = 400;
  const maxTranslationL = 60;
  const maxTranslationR = -60;

  const TranslationIdAI = () => {
    if (!isMobile) {
      const normalizedScrollPos = Math.min(scrollPosition, maxScroll);
      return (normalizedScrollPos / maxScroll) * maxTranslationR;
    }
    return 0; 
  };
  const TranslationPsXd = (scrollPos) => {
    if (!isMobile) {
      const normalizedScrollPos = Math.min(scrollPosition, maxScroll);
      return (normalizedScrollPos / maxScroll) * maxTranslationL;
    }
    return 0; 
  };


  return <div className="flex   justify-center  lg:mr-28 mt-10 xl:mr-32 md:mr-10 sm:mr-14  fuldiv">
    <div className="absolute  flex flex-col  w-[700px] xl:mt-[75px] mt-32 smart  ">
        <img className="" data-aos="zoom-in-up" data-aos-duration="1500" src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img-bg.svg" alt="circle-background"   /> 
        <div >
          
        <img data-aos="zoom-in" data-aos-duration="2500" data-aos-delay={`${scrollPosition === -1 ? '1200' : '0'}`} className="absolute xl:top-12 xl:left-9  xl:w-24 lg:top-12 lg:left-12 top-4 md:w-20 w-12" style={{
          transform: `translateX(${TranslationIdAI(scrollPosition)}px)`
        }} src={Id} alt="Id" />
        <img data-aos="zoom-in" data-aos-duration="3000" data-aos-delay={`${scrollPosition === -1 ? '1250' : '0'}`} className="absolute xl:top-72 xl:-left-11  xl:w-24 lg:top-60 md:top-36 md:-left-12 lg:-left-9 md:w-20 w-12 top-24 -left-7" style={{
          transform: `translateX(${TranslationIdAI(scrollPosition)}px)`
        }} src={AI} alt="Id" />
        <img data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={`${scrollPosition === -1 ? '1300' : '0'}`} className="absolute xl:top-12 xl:right-9 xl:w-24 lg:top-12 lg:right-12 top-4 right-0 md:w-20 w-12" style={{
          transform: `translateX(${TranslationPsXd(scrollPosition)}px)`
        }} src={Ps} alt="Id" />
        <img data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={`${scrollPosition === -1 ? '1350' : '0'}`} className="absolute xl:top-72 xl:-right-11 xl:w-24 lg:-right-9 lg:top-60 md:top-36 md:-right-9 md:w-20 w-12 -right-7 top-24"  style={{
          transform: `translateX(${TranslationPsXd(scrollPosition)}px)`
        }} src={XD} alt="Id" />
        </div>
        


    </div>
    <div className=" flex flex-col  mt-[-40px] opacity-100 ">
    <img className="object-cover hero"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png"  alt="Background"/>
    </div>
  </div>;
}
