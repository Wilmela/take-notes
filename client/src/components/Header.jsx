import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo.jpeg";

const Item = ({ handleClick, title, className }) => (
  <li onClick={handleClick} className={`${className} cursor-pointer list-none`}>
    <Link to="/"><p className="text-[#F6C13E]">{title}</p></Link>
  </li>
);

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menuStyle = "text-3xl text-green-400 cursor-pointer ";

  return (
    <nav className="w-full border-b py-2 px-4 flex justify-between items-center bg-white sticky top-0 z-10 ">
      <div className="flex justify-center items-center">
        <img
          src={LOGO}
          alt="logo"
          className="w-[40px] flex justify-start items-center mr-2 rounded-full"
        />
        <h3 className="text-2xl text-[#F6C13E] font-bold">
          tak<span className="text-green-400 text-3xl">Note</span>
        </h3>
      </div>

      <ul className="flex-[.5] hidden md:flex items-center justify-evenly px-4">
        {["Contact", "About"].map((item) => (
          <Item key={item} title={item} />
        ))}
      </ul>

      <div className="relative md:hidden">
        {toggle ? 
          <AiOutlineClose onClick={() => setToggle(false)} className={menuStyle} />
         : 
          <AiOutlineMenu onClick={() => setToggle(true)} className={menuStyle} />
        }
    
      {toggle && (
        <div
          data-aos="fade-up"
          className="flex-1 z-10 w-[80%] h-screen fixed top-0 right-0 shadow-sm p-6 bg-[#fffdf9]"
        >
          <div className="w-full flex justify-end text-3xl text-green-400 cursor-pointer">
            <AiOutlineClose onClick={() => setToggle(false)} />
          </div>

          <div className="flex flex-col h-[200px] justify-evenly items-center">
            <img
              src={LOGO}
              alt="logo"
              className="w-[100px] rounded-full flex justify-start items-center mb-2"
            />
            <h3 className="text-2xl text-[#F6C13E] font-bold">
              tak<span className="text-green-400 text-3xl">Note</span>
            </h3>
            <p>Don't miss that point!</p>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Header;
