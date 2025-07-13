import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="navbar bg-[#ffffff]  sm:px-[60px] fixed md:px-[80px] px-3 mx-auto shadow-sm ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Upload</a>
                </li>
              </ul>
            </div>
            <a className="font-bold text-3xl text-[#4F46E5]">Uplodia</a>
          </div>
          <div className="navbar-center text-lg hidden lg:flex">
            <ul className="flex items-center justify-between gap-3 px-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-[#131313]"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-[#131313]"
                }
              >
                Profile
              </NavLink>

              <NavLink
                to="/upload"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-[#131313]"
                }
              >
                Upload
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-blue-600 text-[#ffffff]">SignUp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
