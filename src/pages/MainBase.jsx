import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainBase = () => {
  return (
    <div className="container mx-auto bg-green-100">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainBase;
