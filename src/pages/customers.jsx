import React, { useContext, useEffect } from "react";
import Sidebar from "../components/menubar/Sidebar";
import { BsFillPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";
import { VendorContext } from "@/context/VendorContext";
import { HashLoader } from "react-spinners";
import { formatDistanceToNow } from "date-fns";
import { sortByField } from "@/logics/logic";

const customers = () => {
  const { userData, orders, fetchOrder, loader } = useContext(VendorContext);
  const sortedOrders = sortByField(orders, "orderDate");

  useEffect(() => {
    document.title = "Vendor | Customers";
    fetchOrder();
  }, []);

  return (
    <Sidebar>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between px-4 pt-4">
          <h2 className="text-gray-800 font-semibold">Customers</h2>
          <div className="flex justify-center items-center mr-2">
            <span className=" text-gray-800 font-medium ">Hi,</span>

            <span className="ml-1 font-bold text-green-500">
              {userData ? userData.name : "xyz"}
            </span>
          </div>
        </div>

        {loader ? (
          <div className="flex h-screen items-center justify-center mt-4">
            <HashLoader color="#22c55e" />
          </div>
        ) : (
          <div className="p-4">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span className="text-lg text-gray-800 font-semibold">
                  Name
                </span>
                <span className="hidden md:grid text-lg text-gray-800 font-semibold">
                  Items Ordered
                </span>
                <span className="hidden md:grid text-lg text-gray-800 font-semibold">
                  Last Order
                </span>
                <span className="hidden md:grid text-lg text-gray-800 font-semibold">
                  Store
                </span>
                <span className="text-lg text-gray-800 font-semibold">
                  Payment Details
                </span>
              </div>
              <ul>
                {sortedOrders.map((item, id) => (
                  <li
                    key={item._id}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="text-green-500 bg-green-100 rounded-lg p-3">
                        <BsFillPersonFill />
                      </div>
                      <p className="pl-4">{item.customerId.name}</p>
                    </div>
                    <p className="hidden md:grid ml-4">
                      {item.itemsOrdered.length}
                    </p>
                    <p className="hidden md:grid">
                      {formatDistanceToNow(new Date(item.orderDate), {
                        addSuffix: true,
                      })}
                    </p>
                    <p className="hidden md:grid">{item.storeId.storeName}</p>
                    <div className="flex justify-between items-center">
                      <p className="">{item.paymentDetails.paymentId}</p>
                      <BsThreeDotsVertical />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Sidebar>
  );
};

export default customers;
