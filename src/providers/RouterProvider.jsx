import { createBrowserRouter } from "react-router-dom";
import MainBase from "../pages/MainBase";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import AddPainting from "../pages/AddPainting";
import AllPaintings from "../pages/AllPaintings";
import MyPainting from "../pages/MyPainting";

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
        path: "/all-paintings",
        element: <AllPaintings></AllPaintings>,
      },
      {
        path: "/add-painting",
        element: <AddPainting></AddPainting>,
      },
      {
        path: "/my-painting",
        element: <MyPainting></MyPainting>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/log-in",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

export default router;
