import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainBase = () => {
  return (
    <div className="container mx-auto bg-gradient-to-r from-red-500 via-purple-500 to-pink-500">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainBase;
