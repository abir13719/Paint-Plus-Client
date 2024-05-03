import { createBrowserRouter } from "react-router-dom";
import MainBase from "../pages/MainBase";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import AddPainting from "../pages/AddPainting";
import AllPaintings from "../pages/AllPaintings";
import MyPainting from "../pages/MyPainting";
import PrivateRoutesProvider from "./PrivateRoutesProvider";
import PaintDetails from "../pages/PaintDetails";
import UpdatePaint from "../pages/UpdatePaint";

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
        loader: () => fetch("http://localhost:5000/painting"),
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
        path: `/painting/:id`,
        element: (
          <PrivateRoutesProvider>
            <PaintDetails></PaintDetails>
          </PrivateRoutesProvider>
        ),
      },
      {
        path: `/painting/update/:id`,
        element: (
          <PrivateRoutesProvider>
            <UpdatePaint></UpdatePaint>
          </PrivateRoutesProvider>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/painting/update/${params.id}`),
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
