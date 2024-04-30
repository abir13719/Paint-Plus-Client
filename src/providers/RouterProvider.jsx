import { createBrowserRouter } from "react-router-dom";
import MainBase from "../pages/MainBase";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import AddPainting from "../pages/AddPainting";
import AllPaintings from "../pages/AllPaintings";
import MyPainting from "../pages/MyPainting";
import PrivateRoutesProvider from "./PrivateRoutesProvider";

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
        element: (
          <PrivateRoutesProvider>
            <AddPainting></AddPainting>
          </PrivateRoutesProvider>
        ),
      },
      {
        path: "/my-painting",
        element: (
          <PrivateRoutesProvider>
            <MyPainting></MyPainting>
          </PrivateRoutesProvider>
        ),
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
