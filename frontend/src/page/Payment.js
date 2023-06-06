import React, { useState } from "react";
import PayPal from "./PayPal";
import CreditCardForm from "./CreditCardForm";
import UpiForm from "./UpiForm";
import QrCodeForm from "./QrCodeForm";
import Invoice from "./Invoice";

const Payment = ({ totalPrice }) => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [paid, setPaid] = useState(false);

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleSuccessPayment = () => {
    setPaid(true);
  };

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "paypal":
        return (
          <PayPal
            amount={totalPrice}
            currency={"USD"}
            onSuccessPayment={handleSuccessPayment}
          />
        );
      case "creditCard":
        return (
          <CreditCardForm
            amount={totalPrice}
            currency={"USD"}
            onSuccessPayment={handleSuccessPayment}
          />
        );
      case "upi":
        return <UpiForm onSuccessPayment={handleSuccessPayment} />;
      case "qrCode":
        return <QrCodeForm onSuccessPayment={handleSuccessPayment} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-2 md:p-4">
      {!paid ? (
        <>
          <h2 className="text-lg md:text-2xl font-bold text-slate-600 mb-4">
            Payment Method
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              className={`${
                paymentMethod === "paypal" ? "bg-blue-500" : "bg-gray-300"
              } text-white py-2 px-4 rounded`}
              onClick={() => handlePaymentMethod("paypal")}
            >
              PayPal
            </button>
            <button
              className={`${
                paymentMethod === "creditCard" ? "bg-blue-500" : "bg-gray-300"
              } text-white py-2 px-4 rounded`}
              onClick={() => handlePaymentMethod("creditCard")}
            >
              Credit Card
            </button>
            <button
              className={`${
                paymentMethod === "upi" ? "bg-blue-500" : "bg-gray-300"
              } text-white py-2 px-4 rounded`}
              onClick={() => handlePaymentMethod("upi")}
            >
              UPI
            </button>
            <button
              className={`${
                paymentMethod === "qrCode" ? "bg-blue-500" : "bg-gray-300"
              } text-white py-2 px-4 rounded`}
              onClick={() => handlePaymentMethod("qrCode")}
            >
              QR Code
            </button>
          </div>
          {renderPaymentForm()}
        </>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-lg md:text-2xl font-bold text-slate-600 mb-4">
            Payment Successful!
          </p>
          <Invoice />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => setPaid(false)}
          >
            Back to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
