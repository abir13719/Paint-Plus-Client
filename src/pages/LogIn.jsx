import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const LogIn = () => {
  const { signInUser, signInWithGoogle, signInWithGitHub, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [problem, setProblem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setProblem("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user),
          setUser(result.user),
          navigate(location.state ? location.state : "/");
      })
      .catch(() => setProblem("User and password do not match"));
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user),
          setUser(result.user),
          navigate(location.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  const handleGithubLogIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result.user),
          setUser(result.user),
          navigate(location.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container mx-auto  h-screen flex items-center justify-center loginBg my-5">
      <div className="bg-white/20 backdrop-blur-3xl shadow-2xl p-4 rounded-xl w-[360px] border border-black animate__animated animate__slideInUp">
        <form onSubmit={handleLogIn} className="flex flex-col gap-3">
          <h1 className="text-center text-2xl font-medium text-black">Log In</h1>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <MdEmail className="text-base text-black" />
          </div>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <span onClick={handleShowPassword}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
          </div>
          {problem && <p className="text-red-500 text-sm">{problem}</p>}
          <div>
            <input
              className=" text-black w-full btn text-base rounded-full bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
              type="submit"
              value="Log In"
            />
          </div>
          <div className="flex gap-2 items-center justify-center text-black border-b border-t border-gray-800 py-2">
            <span>Log in with</span>
            <span onClick={handleGoogleLogIn} className="cursor-pointer">
              <div className="flex items-center gap-1 bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black p-1 rounded-md">
                <FaGoogle />
                Google
              </div>
            </span>
            <span onClick={handleGithubLogIn} className="cursor-pointer">
              <div className="flex items-center gap-1 bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black p-1 rounded-md">
                <FaGithub />
                Github
              </div>
            </span>
          </div>
          <div className="flex text-black">
            <span>
              Don&apos;t have an account? Please
              <Link to="/sign-up" className="font-medium">
                {" "}
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
