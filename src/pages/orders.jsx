import React, { useContext, useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";
import Sidebar from "../components/menubar/Sidebar";
import { VendorContext } from "@/context/VendorContext";
import { useRouter } from "next/router";

const orders = () => {
  const { userData } = useContext(VendorContext);
  const router = useRouter();
  useEffect(() => {
    document.title = "Vendor | orders";
  }, []);
  return (
    <Sidebar>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between px-4 pt-4">
          <h2 className="text-gray-800 font-semibold">Orders</h2>
          <div className="flex justify-center items-center mr-2">
            <span className=" text-gray-800 font-medium ">Hi,</span>

            <span className="ml-1 font-bold text-green-500">
              {userData ? userData.name : "xyz"}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between items-center cursor-pointer">
              <span className="text-lg text-gray-800 font-semibold">Order</span>
              <span className="sm:text-left text-right text-lg text-gray-800 font-semibold">
                Status
              </span>
              <span className="hidden md:grid text-lg text-gray-800 font-semibold">
                Last Order
              </span>
              <span className="hidden sm:grid text-lg text-gray-800 font-semibold">
                Method
              </span>
            </div>
            <ul>
              {data.map((item, id) => (
                <li
                  key={id}
                  onClick={() => router.push(`/order-details/${item.id}`)}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="text-green-500 bg-green-100 rounded-lg p-3">
                      <BiShoppingBag />
                    </div>
                    <div className="pl-4">
                      <p className="text-gray-800 font-bold">
                        ${item.total.toLocaleString()}
                      </p>
                      <p className="text-gray-800 text-sm">{item.name.first}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    <span
                      className={
                        item.status == "Processing"
                          ? "bg-blue-200 p-2 rounded-lg"
                          : item.status == "Completed"
                          ? "bg-green-200 p-2 rounded-lg"
                          : "bg-yellow-200 p-2 rounded-lg"
                      }
                    >
                      {item.status}
                    </span>
                  </p>
                  <p className="hidden md:grid">{item.date}</p>

                  <div className="sm:flex hidden justify-between items-center">
                    <p className="">{item.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default orders;
