import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/menubar/Sidebar";
import { VendorContext } from "../../context/VendorContext";
import { useRouter } from "next/router";
import { Badge } from "@chakra-ui/react";
import { BsArrowBarRight } from "react-icons/bs";
import DeliveryDetails from "@/components/orderDetails/DeliveryDetails";
import OrderSummary from "@/components/orderDetails/OrderSummary";
import axios from "axios";
const orderDetails = () => {
  const { userData } = useContext(VendorContext);
  // console.log(orderId);
  const router = useRouter();
  const orderId = router.query.orderId;

  //------------ get order details start ------------
  // const fetchOrderDetails = async () => {

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
  //       },
  //     };
  //     console.log("Call ke andar", orderId);

  //     const { data } = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/order/vendor/get-order/${router.query.orderId}`,
  //       config
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    document.title = "Vendor | order-details";
    // fetchOrderDetails();
  }, []);

  return (
    <Sidebar>
      <div className="flex justify-between px-4 pt-4 mb-2">
        <h2 className="text-gray-800 font-semibold flex items-center gap-3">
          <p className="cursor-pointer" onClick={() => router.push("/orders")}>
            <Badge variant="outline">Order</Badge>
          </p>{" "}
          <BsArrowBarRight />
          <span className="text-gray-400 text-xs sm:text-sm tracking-tighter font-extralight">
            Order-Id : adsdsd
          </span>
        </h2>
        <div className="flex justify-center items-center mr-2">
          <span className=" text-gray-800 font-medium ">Hi,</span>

          <span className="ml-1 font-bold text-green-500">
            {userData ? userData.name : "xyz"}
          </span>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-gray-100 min-h-screen">
          <div className="p-4">
            <div className="w-full m-auto p-4 border rounded-lg bg-white min-h-screen">
              <div className="flex sm:flex-row flex-col-reverse  justify-evenly">
                <div className="sm:w-1/3  sm:border-r-2 flex flex-col">
                  <DeliveryDetails />
                </div>
                <div className="sm:w-2/3">
                  <OrderSummary />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default orderDetails;
