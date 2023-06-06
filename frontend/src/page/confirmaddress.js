import React from "react";
import { useSelector } from "react-redux";
import Payment from "./Payment";

const ConfirmAddress = () => {
  const userAddress = useSelector((state) => state.user.address);
  const [showPayment, setShowPayment] = React.useState(false);

  const handleConfirmAddress = () => {
    setShowPayment(true);
  };

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Confirm Address
      </h2>

      <div className="my-4">
        <h3 className="text-lg font-bold text-gray-800">Delivery Address</h3>
        <p className="text-gray-700">{userAddress.addressLine1}</p>
        <p className="text-gray-700">{userAddress.addressLine2}</p>
        <p className="text-gray-700">{userAddress.city}, {userAddress.state} - {userAddress.pincode}</p>
        <p className="text-gray-700">{userAddress.country}</p>
      </div>

      <div className="my-4">
        <h3 className="text-lg font-bold text-gray-800">Billing Address</h3>
        <p className="text-gray-700">{userAddress.billingAddressLine1}</p>
        <p className="text-gray-700">{userAddress.billingAddressLine2}</p>
        <p className="text-gray-700">{userAddress.billingCity}, {userAddress.billingState} - {userAddress.billingPincode}</p>
        <p className="text-gray-700">{userAddress.billingCountry}</p>
      </div>

      <div className="my-4">
        {!showPayment ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold"
            onClick={handleConfirmAddress}
          >
            Confirm Address
          </button>
        ) : (
          <Payment totalPrice={100} />
        )}
      </div>
    </div>
  );
};

export default ConfirmAddress;
