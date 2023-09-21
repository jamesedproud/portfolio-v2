import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Home from "./Home";

const MenuItem = ({ to, label, onClick }) => (
  <li className="hover:text-teal-400 duration-200 hover:cursor-pointer">
    <Link to={to} spy={true} smooth={true} duration={500} onClick={onClick}>
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-gray-900 text-[#fff] z-50">
      <div>
        <Link to={"home"} spy={true} smooth={true} duration={500}>
          <img
            className="hover:cursor-pointer hover:scale-110 duration-500"
            src={Logo}
            alt="JP"
            style={{ width: "50px", marginTop: "5px" }}
          />
        </Link>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex">
        {[
          { to: "home", label: "Home" },
          { to: "about", label: "About" },
          { to: "experience", label: "Experience" },
          { to: "skills", label: "Skills" },
          { to: "portfolio", label: "Portfolio" },
          { to: "contact", label: "Contact" },
        ].map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>

      {/* Hamburger menu */}
      <div
        onClick={toggleNav}
        className="md:hidden z-10 hover:cursor-pointer hover:text-teal-400"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
            : "hidden"
        }`}
      >
        {[
          { to: "home", label: "Home" },
          { to: "about", label: "About" },
          { to: "experience", label: "Experience" },
          { to: "skills", label: "Skills" },
          { to: "portfolio", label: "Portfolio" },
          { to: "contact", label: "Contact" },
        ].map((item, index) => (
          <MenuItem key={index} {...item} onClick={toggleNav} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
