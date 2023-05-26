import React, { useContext, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

import { BiShoppingBag } from "react-icons/bi";
import { VendorContext } from "@/context/VendorContext";
import { sortByField } from "@/logics/logic";
import { FadeLoader } from "react-spinners";
import SkeletonLoader from "../SkeletonLoader";
const RecentOrders = () => {
  const { fetchOrder, orders, loader } = useContext(VendorContext);
  useEffect(() => {
    fetchOrder();
  }, []);
  const sortedOrders = sortByField(orders, "orderDate");
  // console.log(sortedOrders);
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1 className="text-gray-800 font-semibold">Recent Orders</h1>

      {loader ? (
        <SkeletonLoader />
      ) : (
        <ul>
          {sortedOrders.map((order, id) => (
            <li
              key={order._id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div className="text-green-500 bg-green-100 rounded-lg p-3">
                <BiShoppingBag />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">
                  &#8377;{order.billDetails.totalBill}
                </p>
                <p className="text-gray-400 text-sm">{order.customerId.name}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm font-light">
                {/* calculate the relative distance oof the time  */}
                {formatDistanceToNow(new Date(order.orderDate), {
                  addSuffix: true,
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentOrders;
