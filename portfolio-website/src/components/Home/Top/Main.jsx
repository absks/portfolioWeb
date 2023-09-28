import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter as Router,Route,Routes,Link,useLocation,} from "react-router-dom";
import {photos} from './photos.css';


export default function Main() {
    const [activePage, setActivePage] = useState("home");
    const [animateOnce, setAnimateOnce] = useState(true);
    
    const handlePageChange = (page) => {
        setActivePage(page);
      };


  useEffect(() => {
    if (animateOnce) {
      AOS.init({ once: true });
      setAnimateOnce(false);
    }
  }, [animateOnce]);
  return (
    <div className="ml-[25px] lg:pt-32 pt-16 mainTop  flex flex-col  max-w-lg ">
     <div data-aos="fade-down" data-aos-duration="1500"> <div className="flex ">
        <span className=" xl:border-t-2 border-t  w-4 xl:mt-3  border-[#327a56] border-solid flex font-light"></span>
        <p className="leading-none text-center text-[#64f4ab] pl-[5px] font-semibold xl:text-lg text-base">
          Introducing
        </p>
      </div>
      <div className="flex flex-col justify-center items-start lg:mt-3 mt-1">
      <h1 className="xl:text-[80px] lg:text-[50px] text-4xl   text-[#fff] font-semibold">Hello</h1></div>
      <div className=" justify-center lg:mt-3 mt-1"> 
      <span className="xl:leading-[80px] xl:text-[80px] text-4xl lg:leading-10 lg:text-[60px] sm:text-4xl font-bold text-[#fff]">
        I'm Jessy Walter
      </span>
      </div>
      <div className="justify-center lg:mt-3 mt-1 mb-4">
      <p className="  sm:text-lg text-base  font-light text-[#fff]  text-left sm:max-w-lg max-w-sm ">
        Since beginning my journey as a freelance designer nearby 7 years ago, I
        've done remote work for agencies, consulted for startup, and
        collaborated with talented people to create digital products.
      </p>
      </div>
      
      
      </div>
      <div className={``} >
        <Link to={`/contact`} onClick={() => handlePageChange('contact')} className={``}>
            <button type="button" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1200" data-aos-easing="cubic-bezier(.165,.84,.44,1)" className="text-gray-900 relative   contact  hover:shadow-none overflow-hidden bg-gradient-to-r from-[#ffcb1c] via-[#ffcb1c] to-[#ffb028] hover:bg-gradient-to-l  font-medium rounded-[14px] sm:pr-[46px] pr-[30px]  sm:pl-[30px] pl-[30px] sm:py-[15px] py-3 text-center font-montserrat font-sans sm:text-lg text-sm ">Contact Me</button>
          </Link>
        </div>
    </div>
  );
}
