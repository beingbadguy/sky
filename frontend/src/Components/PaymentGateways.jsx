import React from "react";
import { FaPaypal, FaAmazonPay, FaApplePay, FaGooglePay } from "react-icons/fa";
import {
  SiMastercard,
  SiVisa,
  SiAmericanexpress,
  SiStripe,
} from "react-icons/si";

const PaymentGateways = () => {
  return (
    <div className="flex justify-center items-center space-x-4  p-4 flex-wrap gap-2">
      <FaPaypal size={32} className="text-white cursor-pointer" title="PayPal" />
      <FaAmazonPay size={32} className="text-white cursor-pointer" title="Amazon Pay" />
      <FaApplePay size={32} className="text-white cursor-pointer" title="Apple Pay" />
      <FaGooglePay size={32} className="text-white cursor-pointer" title="Google Pay" />
      <SiMastercard size={32} className="text-white cursor-pointer" title="Mastercard" />
      <SiVisa size={32} className="text-white cursor-pointer" title="Visa" />
      <SiAmericanexpress
        size={32}
        className="text-white cursor-pointer"
        title="American Express"
      />
      <SiStripe size={32} className="text-white cursor-pointer" title="Stripe" />
    </div>
  );
};

export default PaymentGateways;
