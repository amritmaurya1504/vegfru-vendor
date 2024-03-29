import React, { useState } from "react";
import { GrLocationPin, GrLocation } from "react-icons/gr";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { getValue } from "@/logics/logic";
import axios from "axios";
import StatusSkeleton from "../StatusSkeleton"

const DeliveryDetails = ({ orders, fetchOrderDetails }) => {
  const [loader, setLoader] = useState(false);
  const statusArr = ["Accepted", "Processing", "Out for delivery", "Delivered"];

  const handleStatusChange = async (value) => {
    const status = statusArr[value - 1];
    console.log(status);
    setLoader(true)
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/order/change-status/${orders._id}`, { orderStatus: status },
        config
      );
      if (data.success) {
        fetchOrderDetails()
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);

  }


  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <div class="p-6">
            <div className="flex  gap-2 mb-3">
              <GrLocationPin size={36} />
              <div>
                <h1 className="title-font text-lg font-semibold text-gray-900">
                  {orders?.storeId.storeName}
                </h1>
                <p class="leading-relaxed">
                  {orders?.storeId.storeAddress}
                </p>
                <small>Landmark : {orders?.storeId.landmark}</small>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-12 h-20 sm:mr-56 mr-5"
          src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1684599072/downarrow_oh3xdx.png"
          alt=""
        />
        <div>
          <div class="p-6">
            <div className="flex  gap-2 mb-3">
              <GrLocation size={40} className="mb-2" />
              <div>
                <h1 className="title-font text-lg font-semibold text-gray-900">
                  {orders?.customerId.name}
                </h1>
                <p class="leading-relaxed">
                  {orders?.toAddress.address + " " + orders?.toAddress.place}
                </p>
                <small>Landmark : {orders?.toAddress.landmark}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* status handling  */}

      <div className="sm:mx-5 border-t-2">
        <h3 className="text-xl font-semibold mb-4 mt-8">{loader ? "Updating" : "Manage"} Order Status</h3>
        <RadioGroup onChange={handleStatusChange} value={getValue(orders?.orderStatus)}>
          {loader ? (<StatusSkeleton />)
            : (
              <Stack>
                <Radio size="md" name="1" value="1" colorScheme="green" >
                  Accepted
                </Radio>
                <Radio size="md" name="2" value="2" colorScheme="green" >
                  Processing
                </Radio>
                <Radio size="md" name="3" value="3" colorScheme="green" >
                  Out for Delivery
                </Radio>
                <Radio size="md" name="4" value="4" colorScheme="green" >
                  Delivered
                </Radio>
              </Stack>
            )
          }
        </RadioGroup>
      </div>
    </div>
  );
};

export default DeliveryDetails;
