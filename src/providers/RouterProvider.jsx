import { createBrowserRouter } from "react-router-dom";
import MainBase from "../pages/MainBase";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBase></MainBase>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
