import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiFruitBowl } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineUser, AiOutlineProfile } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { useRouter } from "next/router";

import { Tooltip } from "react-tooltip";

const Sidebar = ({ children }) => {
  const router = useRouter();
  //   useEffect(() => {
  //     ReactTooltip.rebuild();
  //   }, []);
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white boreder-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col justify-start items-center gap-2">
          <Link href="/">
            <div className="bg-green-500 hover:bg-green-400 rounded-lg text-white p-1 flex justify-center items-center">
              <GiFruitBowl size={24} />
            </div>
          </Link>

          <div className="flex flex-col gap-5 mt-10 justify-start items-center">
            <Link href="/">
              <div
                className="bg-gray-100 hover:bg-gray-200  text-gray-500 hover:text-gray-700 rounded-lg  p-1 flex justify-center items-center"
                data-tooltip-id="dashboard"
                data-tooltip-content="Dashboard"
                data-tooltip-place="right"
              >
                <RxDashboard size={24} />
              </div>
              <Tooltip id="dashboard" />
            </Link>
            <Link href="/customers">
              <div
                className="bg-gray-100 hover:bg-gray-200  text-gray-500 hover:text-gray-700 rounded-lg  p-1 flex justify-center items-center"
                data-tooltip-id="customer"
                data-tooltip-content="Customer"
                data-tooltip-place="right"
              >
                <FiUsers size={24} />
              </div>
              <Tooltip id="customer" />
            </Link>
            <Link href="/orders">
              <div
                className="bg-gray-100 hover:bg-gray-200  text-gray-500 hover:text-gray-700 rounded-lg  p-1 flex justify-center items-center"
                data-tooltip-id="order"
                data-tooltip-content="Orders"
                data-tooltip-place="right"
              >
                <BiShoppingBag size={24} />
              </div>
              <Tooltip id="order" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-2">
          <Link href="/">
            <div
              className="bg-gray-100 hover:bg-gray-200  text-gray-500 hover:text-gray-700 rounded-lg  p-1 flex justify-center items-center"
              data-tooltip-id="profile"
              data-tooltip-content="Profile"
              data-tooltip-place="right"
            >
              <AiOutlineUser size={24} />
            </div>
            <Tooltip id="profile" />
          </Link>
          <Link href="" onClick={() => router.push("/login")}>
            <div
              className="bg-gray-100 hover:bg-gray-200  text-gray-500 hover:text-gray-700 rounded-lg  p-1 flex justify-center items-center mb-5 "
              data-tooltip-id="logout"
              data-tooltip-content="Logout"
              data-tooltip-place="right"
            >
              <RiLogoutBoxLine size={24} />
            </div>
            <Tooltip id="logout" />
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;