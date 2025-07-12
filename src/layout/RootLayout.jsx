import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RootLayout = () => {
  return (
    <>
      <div><Navbar /></div>
      <div className=" bg-[#F9FAFB]">
        <div className=" min-h-screen mx-auto">
           <Outlet />
        </div>
      </div>
      <div><Footer /></div>
    </>
  );
};

export default RootLayout;
