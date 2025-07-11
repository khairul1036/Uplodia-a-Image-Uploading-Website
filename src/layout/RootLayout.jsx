import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RootLayout = () => {
  return (
    <>
      <div><Navbar/></div>
      <div className="min-h-screen ">
          <Outlet />
      </div>
      <div><Footer/></div>
    </>
  );
};

export default RootLayout;
