import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const HeroInfo = ({images}) => {
  const [cartItem, setcartItem] = React.useState(0);
  const dispatch = useDispatch()

  const addToCart = () => {
        cartItem > 0 && 
        dispatch(
            addItem({
                id: Math.random(),
                name: 'Fall Limited Edition Sneakers',
                price: 125,
                quantity: cartItem,
                url: images[3],
            })
        );

        setcartItem(0)
  }
  return (
    <div className="md:p-4">
      <div className="herotext mt-4 p-6 md:max-w-lg">
        <p className="font-bold text-gray-500">SNEAKER COMPANY</p>
        <h1 className="text-4xl font-bold mt-4 mb-4">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray-500 mb-4 leading-relaxed text-lg">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price flex flex-row items-center gap-4 mb-4">
          <h2 className="text-3xl font-bold">$125.00</h2>
          <span className="bg-black text-white font-bold px-3 rounded-md">
            50%
          </span>
          <p className="line-through font-bold text-gray-500 ml-12">$250.00</p>
        </div>
      </div>

      <div className="addtocart p-4">
        <div className="quantity flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg mb-4">
          <button
            className="text-3xl font-bold text-amber-600"
            onClick={() => setcartItem(cartItem > 0 ? cartItem - 1 : 0)}
          >
            -
          </button>
          <span className="font-bold text-2xl">{cartItem}</span>
          <button
            className="text-3xl font-bold text-amber-600"
            onClick={() => setcartItem(cartItem + 1)}
          >
            +
          </button>
        </div>

        <div className="addtocartbtn">
          <button className="bg-amber-600 text-white w-full p-4 rounded-lg flex flex-row items-center justify-center gap-4 hover:bg-amber-700 transition-all duration-100 ease-in-out">
            <img src="/icon-cart.svg" alt="" />
            <span 
            className="font-bold text-gray-500"
            onClick={() => {addToCart()}}
            >
                Add to cart
                </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
