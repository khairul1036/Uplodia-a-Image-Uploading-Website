import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/common/Home.jsx";
import router from "./Route/Router.jsx";
import { RouterProvider } from "react-router-dom";



createRoot(document.getElementById("root")).render(

  <StrictMode>
    <div className="max-w-[1920px] mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
