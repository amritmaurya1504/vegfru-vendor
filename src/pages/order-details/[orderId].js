import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/menubar/Sidebar";

import { VendorContext } from "../../context/VendorContext";
import { useRouter } from "next/router";
import { Badge } from "@chakra-ui/react";
import { BsArrowBarRight } from "react-icons/bs";
import DeliveryDetails from "@/components/orderDetails/DeliveryDetails";
import OrderSummary from "@/components/orderDetails/OrderSummary";
import axios from "axios";
import { HashLoader } from "react-spinners";

const orderDetails = () => {
  const { userData, loader, setLoader } = useContext(VendorContext);
  const [orders, setOrders] = useState();
  const router = useRouter();
  const { orderId } = router.query;
  // console.log(orderId)

  //------------ get order details start ------------
  const fetchOrderDetails = async () => {
    setLoader(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/order/vendor/get-order/${orderId}`,
        config
      );
      setOrders(data.orderData);
      // console.log(data.orderData)
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    document.title = "Vendor | order-details";
    if (orderId) {
      fetchOrderDetails();
      // console.log("UseEffect called!")
    }
  }, [orderId]);

  return (
    <Sidebar>
      <div className="flex justify-between px-4 pt-4 mb-2">
        <h2 className="text-gray-800 font-semibold flex items-center gap-3">
          <p className="cursor-pointer" onClick={() => router.push("/orders")}>
            <Badge variant="outline">Order</Badge>
          </p>{" "}
          <BsArrowBarRight />
          <span className="text-gray-400 text-xs sm:text-sm tracking-tighter font-extralight">
            Order-Id : {orders?.paymentDetails.orderId}
          </span>
        </h2>
        <div className="flex justify-center items-center mr-2">
          <span className=" text-gray-800 font-medium ">Hi,</span>

          <span className="ml-1 font-bold text-green-500">
            {userData ? userData.name : "xyz"}
          </span>
        </div>
      </div>
      {loader && (
        <div className="flex h-screen items-center justify-center mt-4">
          <HashLoader color="#22c55e" />
        </div>
      )}
      {orders && (
        <div className="bg-gray-100 min-h-screen">
          <div className="bg-gray-100 min-h-screen">
            <div className="p-4">
              <div className="w-full m-auto p-4 border rounded-lg bg-white min-h-screen">
                <div className="flex sm:flex-row flex-col-reverse  justify-evenly">
                  <div className="sm:w-1/3  sm:border-r-2 flex flex-col">
                    <DeliveryDetails
                      orders={orders}
                      fetchOrderDetails={fetchOrderDetails}
                    />
                  </div>
                  <div className="sm:w-2/3">
                    <OrderSummary orders={orders} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
};

export default orderDetails;
