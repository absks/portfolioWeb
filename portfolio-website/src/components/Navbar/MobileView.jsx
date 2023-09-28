import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route,  Routes ,Link,useLocation} from 'react-router-dom';


export default function MobileView  ({handlePageChange,closeNavbar}) {
    const [activePage, setActivePage] = useState('home');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleClick = (page) => {
        handlePageChange(page);
        closeNavbar(); // Close the navbar when a navbar item is clicked
      };

    const location = useLocation();
    useEffect(() => {
     
      if (location.pathname === '/') {
        setActivePage('home');
      } else if (location.pathname === '/portfolio') {
        setActivePage('portfolio');
      } else if (location.pathname === '/contact') {
        setActivePage('contact');
      }
    }, [location.pathname]);
    const isHomeActive = activePage === 'home';
    const isPortfolioActive = activePage === 'portfolio';
    const isContactActive = activePage === 'contact';
  
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
      };
    
  return (
    <div className="bg-[#25262a] text-[#ffffff] p-5 lg:hidden flex items-center">
          <div className="flex flex-col  items-center ">
            <nav className="flex flex-col w-full">
              <Link to={`/`} className={``} onClick={() => handleClick('home')} >
               <span className={`${isHomeActive ? 'nav-link mb-2 text-[35px] font-semibold ': 'nav-link mb-2 text-[35px] hover:font-semibold'}`}>Home</span> 
              </Link>
              <Link to={`/portfolio`} className={`${isPortfolioActive ? 'nav-link mb-2 text-[35px] font-semibold ': 'nav-link mb-2 text-[35px] hover:font-semibold'}`} onClick={() => handleClick('portfolio')}>
                <span className={`${isPortfolioActive ? 'nav-link mb-2 text-[35px] font-semibold ': 'nav-link mb-2 text-[35px] hover:font-semibold'}`}>Portfolio</span>
              </Link>
              <Link to={`/contact`} className={`${isContactActive ? 'nav-link mb-2 text-[35px] font-semibold ': 'nav-link mb-2 text-[35px] hover:font-semibold'}`} onClick={() => handleClick('contact')}>
                Contact
              </Link>
            </nav>
            
          </div>
        </div>
  )
}
