import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-paintings">All Paintings</NavLink>
      </li>
      <li>
        <NavLink to="/add-painting">Add Painting</NavLink>
      </li>
      <li>
        <NavLink to="/my-painting">My Painting</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto navbar bg-gradient-to-r from-yellow-300 via-red-400 to-orange-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 text-base font-medium"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-orange-600 font-bold text-2xl">
          Paint<span className="font-extrabold ml-[-6px] text-black">+</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base gap-1 font-medium">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-1">
        <Link to="/sign-up">
          <button className="btn bg-gradient-to-t from-stone-500 to-stone-600 border-none bg-blend-multiply hover:bg-black text-white">
            Sign Up
          </button>
        </Link>
        <Link to="/log-in">
          <button className="btn bg-gradient-to-t from-stone-500 to-stone-600 border-none bg-blend-multiply hover:bg-black text-white">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
