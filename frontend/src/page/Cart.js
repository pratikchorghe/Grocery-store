import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";

const CartItems = ({ items }) => {
  return (
    <div className="w-full max-w-3xl ">
      {items.map(({ _id, ...otherProps }) => (
        <CartProduct key={_id} id={_id} {...otherProps} />
      ))}
    </div>
  );
};

const CartSummary = ({ totalQty, totalPrice, onPayment }) => {
  return (
    <div className="w-full max-w-md ml-auto">
      <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
      <div className="flex w-full py-2 text-lg border-b">
        <p>Total Qty :</p>
        <p className="ml-auto w-32 font-bold">{totalQty}</p>
      </div>
      <div className="flex w-full py-2 text-lg border-b">
        <p>Total Price</p>
        <p className="ml-auto w-32 font-bold">
          <span className="text-red-500">₹</span> {totalPrice}
        </p>
      </div>
      <button
        className="bg-red-500 w-full text-lg font-bold py-2 text-white"
        onClick={onPayment}
      >
        Payment
      </button>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cartItem);

  const totalPrice = cartItems.reduce(
    (acc, { total }) => acc + parseInt(total),
    0
  );
  const totalQty = cartItems.reduce((acc, { qty }) => acc + parseInt(qty), 0);

  const handlePayment = () => {
    // Implement your payment process logic here
    console.log("Payment process initiated.");
  };

  const [showEmptyCart, setShowEmptyCart] = useState(cartItems.length === 0);

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {showEmptyCart ? (
          <div className="flex w-full justify-center items-center flex-col">
            <img src={emptyCartImage} className="w-full max-w-sm" alt="empty cart"/>
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        ) : (
          <div className="my-4 flex gap-3">
            <CartItems items={cartItems} />
            <CartSummary
              totalQty={totalQty}
              totalPrice={totalPrice}
              onPayment={handlePayment}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
