import React from "react";
import { useRouter } from "next/router";

const OrderSummary = () => {
  const router = useRouter();
  const orderId = router.query.orderId;
  return (
    <div className="overflow-y-scroll">
      {/* Heading and Order-date and ORder-time   */}

      <div className="sm:flex-auto sm:ml-5 mt-2">
        <h3 className="sm:text-3xl text-2xl font-semibold mb-2">
          Order <span className="text-green-500"> Summary</span>
        </h3>
        <div class="border-b-2 border-black mt-2 w-8"></div>
        <p className="leading-relaxed text-gray-400 sm:text-lg mt-2 sm:ml-4">
          Placed on Sat, 20 May, 2023, 7:00 p.m
        </p>
      </div>

      {/* payment mode and payment-id  */}

      <div className="bg-gray-50 rounded-sm p-6 sm:mx-5 mt-2">
        <h3 className="font-semibold">Payment Mode</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs font-light uppercase text-gray-400">
            Paid online
          </p>
          <p className="text-xs  font-extralight text-gray-400">
            Payment-id: jsldjs
          </p>
        </div>
      </div>

      {/* items ordered details  */}

      <div className="mt-4 shadow-sm sm:mx-5 p-6 bg-gray-50 rounded-sm">
        <div className="">
          <h2 className="text-xl font-semibold">3 items</h2>
          <p className="font-extralight text-gray-400">order id: {orderId}</p>
        </div>
        <ul>
          <li className="bg-white rounded-lg  p-2 my-1 items-center flex justify-between cursor-pointer border-b-2">
            <div className="flex items center">
              <img
                src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1683186002/veg5_oupiuy.jpg"
                className="w-20 h-20"
                alt=""
              />
              <div className="ml-3 mt-1">
                <p className="leading-relaxed mb-1">Apple</p>
                <p className="text-gray-400 text-xs leading-relaxed">500 g</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  &#8377;50 X 1
                </p>
              </div>
            </div>
            <p className="text-gray-700 font-extralight mr-2">&#8377;50</p>
          </li>
          <li className="bg-white rounded-lg  p-2 my-1 items-center flex justify-between cursor-pointer border-b-2">
            <div className="flex items center">
              <img
                src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1683186003/veg7_y9j6oz.webp"
                className="w-20 h-20"
                alt=""
              />
              <div className="ml-3 mt-1">
                <p className="leading-relaxed mb-1">Orange</p>
                <p className="text-gray-400 text-xs leading-relaxed">500 g</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  &#8377;30 X 1
                </p>
              </div>
            </div>
            <p className="text-gray-700 font-extralight mr-2">&#8377;30</p>
          </li>
          <li className="bg-white rounded-lg  p-2 my-1 items-center flex justify-between cursor-pointer border-b-2">
            <div className="flex items center">
              <img
                src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1683186003/veg6_qfs3ee.jpg"
                className="w-20 h-20"
                alt=""
              />
              <div className="ml-3 mt-1">
                <p className="leading-relaxed mb-1">Grapes</p>
                <p className="text-gray-400 text-xs leading-relaxed">1 Kg</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  &#8377;80 X 1
                </p>
              </div>
            </div>
            <p className="text-gray-700 font-extralight mr-2">&#8377;80</p>
          </li>
        </ul>
      </div>

      {/* Bill details  */}
      <div className="mt-4 sm:mx-5 p-6">
        <h2 className="font-semibold text-2xl mb-4">Bill Details</h2>
        <div className="flex justify-between items center mb-1">
          <span className="text-gray-400 font-light">M.R.P</span>
          <span className="text-gray-400 font-light">+&#8377;150</span>
        </div>
        <div className="flex justify-between items center mb-1">
          <span className="text-gray-400 font-light">Taxes and GST</span>
          <span className="text-gray-400 font-light">+&#8377;5</span>
        </div>
        <div className="flex justify-between items center mb-1">
          <span className="text-gray-400 font-light">Delivery charge</span>
          <span className="text-gray-400 font-light">+&#8377;15</span>
        </div>
        <div className="flex justify-between items center bg-green-50 border border-green-500 mb-1 p-2 rounded-md mt-2">
          <span className="font-semibold text-green-400">
            Final Paid Amount
          </span>
          <span className="font-semibold text-green-400">&#8377;170</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
