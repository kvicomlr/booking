import Logo from "../assets/assets/images/logo.png";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton.tsx";
const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="container flex items-center m-auto  p-[7px]  z-50 ">
      <div className="flex-1 md:flex-[2] sm:flex-[1]">
        <div className="flex items-center space-x-5">
          <Link to="/">
            <img src={Logo} alt="Logo" className="max-w-[49px]" />
          </Link>

          <Link to="/">
            <h1 className=" text-[#003580] text-[0.9rem]  sm:text-[1.3rem] md:text-[1.9rem]">
              Kueentair
            </h1>
          </Link>
        </div>
      </div>
      <div className=" flex-10">
        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <>
              <h1 className="text-[0.5rem] md:text-[1.2rem] sm:text-[1rem] cursor-pointer text-center  p-1 hover:bg-[#003580] hover:text-white">
                <Link to="/online">Flights</Link>
              </h1>
              <h1 className="text-[0.5rem]  md:text-[1.2rem] sm:text-[1rem] cursor-pointer  text-center p-1 hover:bg-[#003580] hover:text-white">
                <Link to="/online">Stays</Link>
              </h1>
              <div className=" cursor-pointer  relative px-[1rem] ">
                <Link to="/cart">
                  <div className=" w-4 h-4 rounded-full bg-white text-red-800 p-1 flex items-center justify-center absolute left-7 -top-2 text-[12px] font-bold">
                    7
                  </div>
                  <BsCart4 className="text-[1.3rem]  sm:text-[1.4rem] md:text-[1.5rem]" />
                </Link>
              </div>
              <SignOutButton />
            </>
          ) : (
            <>
              <h1 className="py-0 px-[1rem] cursor-pointer text-[#003580] text-[0.9rem]  sm:text-[1.3rem] md:text-[1.5rem]">
                <Link to="/login">Login</Link>
              </h1>

              <h1 className="py-0 px-[1rem] cursor-pointer text-[#003580] text-[0.9rem]  sm:text-[1.3rem] md:text-[1.5rem]">
                <Link to="/register">Register</Link>
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
