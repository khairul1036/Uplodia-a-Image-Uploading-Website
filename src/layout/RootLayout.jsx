import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div>navbar</div>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default RootLayout;
