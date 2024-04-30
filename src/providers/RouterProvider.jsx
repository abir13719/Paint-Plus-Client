import { createBrowserRouter } from "react-router-dom";
import MainBase from "../pages/MainBase";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBase></MainBase>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
