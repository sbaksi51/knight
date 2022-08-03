import React, { useState } from "react";
import Logo from "../img/logo.png";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown((prevState) => !dropdown);
  };

  return (
    <div className="navbar sticky top-0 z-10 section h-24 bg-white-1/90 backdrop-blur-sm">
      <div className="navbar__container section-container flex items-center justify-between">
        {/* Logo Div */}
        <div className="navbar__logo--container flex justify-center items-center gap-2">
          <img src={Logo} alt="company logo" className="logo h-10 w-10" />
          <Link to="/" className="logo__name font-semibold text-[20px] text-black-1">
          Campeon
          </Link>
        </div>
        {/* Navlinks Div */}
        <nav className="navlinks flex justify-center items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navlink text-main font-medium ease-in-out duration-300"
                : "navlink hover:text-main ease-in-out duration-300"
            }
          >
            Home
          </NavLink>
          <div
            className="navlink group relative flex justify-center items-center cursor-pointer"
            onClick={handleDropdown}
          >
            Products
            {dropdown ? <BiChevronUp /> : <BiChevronDown />}
            <div
              className={
                dropdown
                  ? "dropdown absolute top-8 -left-4 flex justify-center items-start flex-col w-[200px] gap-2 bg-white-1 shadow-md p-2 text-sm rounded-lg ease-in-out duration-300"
                  : "hidden ease-in-out duration-300"
              }
            >
              <NavLink
                to="specs"
                className={({ isActive }) =>
                  isActive
                    ? "navlink text-main font-medium hover:text-white-1 hover:bg-main-light w-full p-2 rounded-md ease-in-out duration-300"
                    : "navlink hover:text-white-1 hover:bg-main w-full p-2 rounded-md ease-in-out duration-300"
                }
              >
                Sunglasses
              </NavLink>
              <NavLink
                to="wallets"
                className={({ isActive }) =>
                  isActive
                    ? "navlink text-main font-medium hover:text-white-1 hover:bg-main-light w-full p-2 rounded-md ease-in-out duration-300"
                    : "navlink hover:text-white-1 hover:bg-main w-full p-2 rounded-md ease-in-out duration-300"
                }
              >
                Wallets
              </NavLink>              
            </div>
          </div>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "navlink text-main font-medium ease-in-out duration-300"
                : "navlink hover:text-main ease-in-out duration-300"
            }
          >
            Contact Us
          </NavLink>
          <Link to="signup" className="nav__btn btn">
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
