import { VendorContext } from "@/context/VendorContext";
import React, { useContext } from "react";

const Header = () => {
  const { userData } = useContext(VendorContext);
  return (
    <div className="flex justify-between px-4 pt-4">
      <img
        src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1683186002/logo2_hzkpos.png"
        alt="main-icon"
        className="h-8 w-20 ml-8"
      />
      <div className="flex justify-center items-center mr-2">
        <span className=" text-gray-800 font-medium ">Hi,</span>

        <span className="ml-1 font-bold text-green-500">
          {userData ? userData.name : "xyz"}
        </span>
      </div>
    </div>
  );
};

export default Header;
