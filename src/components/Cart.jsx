import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./cartSlice";
import { toggleCartState } from "./cartSlice";

const Cart = () => {
  const cartContent = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch()

  const total = cartContent.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={` bg-white rounded-2xl md:w-md sm:w-sm lg:w-lg ml-3 p-4 flex justify-center  absolute top-20 right-8 transition-all duration-300 shadow-2xl ${isCartOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>

      <div>
        {cartContent.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
            <h1 className="text-center text-gray-600 font-extrabold mb-4 border-b-gray-400 border-b pb-4 text-2xl">
            MY CART
        </h1>
        <img className="absolute top-0 right-0 p-4" src="./icon-close.svg" alt="" onClick={() => dispatch(toggleCartState())} />
          {cartContent.map((item, index) => (
            <div key={item.id || index} className="flex flex-row items-center gap-4 mb-4 border-b pb-2">
              <img 
                src={item.url || "/default.jpg"} 
                alt={item.name} 
                className="w-16 h-16 rounded-lg object-cover" 
              />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-500">
                  {item.quantity} × ${item.price} ={" "}
                  <span className="font-bold">${item.quantity * item.price}</span>
                </p>
              </div>
              <div className="delete cursor-pointer">
                <img src="./icon-delete.svg" 
                alt=""
                onClick={() => dispatch(removeItem(item.id))}
                 />
              </div>
            </div>
          ))}

          <div className="mt-4 font-bold text-lg">
            Total: ${total}
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default Cart;
