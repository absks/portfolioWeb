import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileView from "./MobileView";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

export default function Navbar() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("home");
    } else if (location.pathname === "/portfolio") {
      setActivePage("portfolio");
    } else if (location.pathname === "/contact") {
      setActivePage("contact");
    }
  }, [location.pathname]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {});
  const [activePage, setActivePage] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "" : "hidden";
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const isHomeActive = activePage === "home";
  const isPortfolioActive = activePage === "portfolio";
  const isContactActive = activePage === "contact";

  return (
    <div
      id="navbar"
      className={`bg-[#25262a] text-[#ffffff] flex justify-between max-w-[1600px]  py-5 pl-6 ${
        isMobileMenuOpen
          ? "fixed lg:sticky lg:flex lg:justify-between lg:pl- inset-0 z-50 overflow-y-auto "
          : ""
      } `}
    >
      <div className="flex items-center">
        {/* Logo */}
        <div
          className={`${isMobileMenuOpen ? "hidden lg:contents" : "contents"} `}
        >
          <a
            href="/"
            className="bg-transparent"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="cubic-bezier(.165,.84,.44,1)"
          >
            <img
              src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg"
              alt="logo"
            />
          </a>
        </div>

        {/* Navbar */}

        <nav className={`ml-12 `}>
          <ul
            className={`hidden lg:flex `}
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-easing="cubic-bezier(.165,.84,.44,1)"
          >
            <li className="">
              <Link
                to={`/`}
                onClick={() => handlePageChange("home")}
                className={
                  isHomeActive
                    ? "border-[#ccc] border-b-[3px] mr-[50px]  text-[#e8e8e8]"
                    : "hover:border-b-[3px] hover:text-[#ffffff] mr-[50px]  text-[#e8e8e8] "
                }
              >
                <span
                  className={
                    isHomeActive
                      ? "text-[#021e33e] text-[18px] font-semibold"
                      : "text-[#021e33e] text-[18px] font-light hover:font-semibold"
                  }
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="">
              <Link
                to={`/portfolio`}
                onClick={() => handlePageChange("portfolio")}
                className={
                  isPortfolioActive
                    ? "border-[#ccc] border-b-[3px] mr-[50px] text-[#e8e8e8] font-black"
                    : "hover:border-b-[3px] hover:text-[#ffffff] mr-[50px] font-light   text-[#e8e8e8]"
                }
              >
                <span
                  className={`${
                    isPortfolioActive
                      ? "text-[#021e33e] text-[18px] font-semibold"
                      : "text-[#021e33e] text-[18px]  hover:font-semibold"
                  } ${
                    isMobileMenuOpen
                      ? "text-[#021e33e] text-[18px] font-semibold"
                      : "text-[#021e33e] text-[18px]  hover:font-semibold"
                  }`}
                >
                  Portfolio
                </span>
              </Link>
            </li>
            <li className="">
              <Link
                to={`/contact`}
                onClick={() => handlePageChange("contact")}
                className={
                  isContactActive
                    ? "border-[#ccc] border-b-[3px] mr-[50px] font-black text-[#e8e8e8]"
                    : "hover:border-b-[3px] hover:text-[#ffffff] mr-[50px]  text-[#e8e8e8] "
                }
              >
                <span
                  className={
                    isContactActive
                      ? "text-[#021e33e] text-[18px] font-semibold"
                      : "text-[#021e33e] text-[18px] font-light hover:font-semibold"
                  }
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Buttons */}
      <div className={`flex ${isMobileMenuOpen ? " mx-auto lg:mx-0 " : ""} `}>
        {/*Mobile view */}
        <div
          className={`lg:hidden mr-5 pt-3 ${
            isMobileMenuOpen
              ? "flex flex-col  items-center text-center content-center"
              : ""
          } `}
        >
          <button
            data-aos="fade-in "
            data-aos-duration="2000"
            data-aos-easing="cubic-bezier(.165,.84,.44,1)"
            className={`text-white `}
            onClick={toggleMobileMenu}
          >
            <i
              className={`fa ${
                isMobileMenuOpen ? "light fa-times-circle" : "fa-light fa-bars"
              } fa-2x`}
            ></i>
          </button>

          <div
            className={`${
              isMobileMenuOpen ? "flex items-center my-auto" : ""
            } ${isHomeActive === true ? !isMobileMenuOpen : isMobileMenuOpen}`}
          >
            {isMobileMenuOpen && (
              <MobileView handlePageChange={handlePageChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "hidden lg:flex" : "contents hidden md:contents"
          } `}
        >
          <Link to="/" target="_blank">
            <button
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-easing="cubic-bezier(.165,.84,.44,1)"
              className="bg-[#2d2e32] text-[#ffc61e] px-[20px] py-[22px] transition-all duration-1000 ease-out rounded-[14px] fa fa-dribbble fa-lg hover:bg-[#ffc61e] hover:text-[#2d2e32] overflow-hidden shadow"
            ></button>
          </Link>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "hidden lg:flex" : "contents hidden md:contents"
          } `}
        >
          <Link
            to={`/contact`}
            onClick={() => handlePageChange("contact")}
            className={
              isContactActive
                ? " mr-[50px] font-black text-[#e8e8e8] ml-5"
                : " hover:text-[#ffffff] mr-[50px]  text-[#e8e8e8] ml-5"
            }
          >
            <button
              type="button"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-easing="cubic-bezier(.165,.84,.44,1)"
              className="text-gray-900 bg-gradient-to-r from-[#ffcb1c] via-[#ffcb1c] to-[#ffb028] hover:bg-gradient-to-l  font-medium rounded-[14px] px-[45px] pt-[16px] pb-[15px] text-center font-montserrat font-sans text-[18px] truncate"
            >
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
