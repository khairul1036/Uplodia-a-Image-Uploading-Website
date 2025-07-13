import { createBrowserRouter } from "react-router-dom";


import RootLayout from "../layout/RootLayout";
import Home from "../pages/common/Home";
import Upload from "../pages/Upload";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/upload",
        element: <Upload></Upload>
      },
      {
        path: "/profile",
        element: <div>profile route</div>
      },
    ],
  },
]);

export default router;