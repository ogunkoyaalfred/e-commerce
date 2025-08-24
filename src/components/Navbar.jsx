import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCartState } from "../components/cartSlice";
// import logo from '/logo.png'

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const dispatch = useDispatch()

  // const isCartOpen = useSelector((state) => state.isCartOpen)
  return (
    <div>
      <div className="flex flex-row items-center justify-around lg:justify-around p-2 sticky top-0 bg-white z-50 ">
      <div
        className="hamburger md:hidden hover:cursor-pointer "
        onClick={() => setisOpen(!isOpen)}
      >
        {isOpen ? (
          <img src="/icon-close.svg" alt="" />
        ) : (
          <img src="/icon-menu.svg" alt="" className="" />
        )}
      </div>

      {/* logo */}

      <div className="logo">
        <img src="/logo.svg" alt="" />
      </div>

      
    {/* navlinks */}

      <nav>
        <ul
          className={`md:flex md:gap-10 ${
            isOpen
              ? "absolute left-0 mt-6 flex-col leading-20 shadow-2xl bg-white h-lvh w-1/2 p-4 -z-50 transition-all duration-500 ease-in-out"
              : " hidden"
          }`}
        >
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="cart hover:cursor-pointer">
        <img 
        src="/icon-cart.svg" 
        alt="" 
        onClick={() => dispatch(toggleCartState())}
        />
      </div>
      <div className="avatar w-10 hover:border-amber-600 hover:border-4 rounded-full cursor-pointer transition-all duration-100 ease-in-out">
        <img src="/image-avatar.png" alt="" />
      </div>
    </div>
   <div className="flex justify-center mt-4">
  <p className="border-b-2 border-gray-200 w-3/4"></p>
</div>

    </div>

  );
};

export default Navbar;
