import React, { useEffect, useContext } from "react";
import { VendorContext } from "@/context/VendorContext";
import Sidebar from "@/components/menubar/Sidebar";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import AllStore from "@/components/store/AllStore";
import axios from "axios";
import { toast } from "react-toastify";

const AddStore = dynamic(
  () => import("../components/store/AddStoreComponent"),
  {
    ssr: false,
  }
);

const Store = () => {
  const { userData, setStores } = useContext(VendorContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };
  useEffect(() => {
    document.title = "Vendor | Store";
  }, []);

  // Fetch all your stores
  const fetchStores = async () => {
    const axiosConfig = {
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
      },
    };
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vendor/get-allstore`, axiosConfig)
      setStores(data.stores)
    } catch (error) {
      toast.error(error.response?.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  useEffect(() => {
    fetchStores()
  }, [])


  return (
    <>
      <Sidebar>
        <div className="bg-gray-100 min-h-screen">
          <div className="flex justify-between px-4 pt-4">
            <h2 className="text-gray-800 font-semibold">Your Stores</h2>
            <div className="flex justify-center items-center mr-2">
              <span className=" text-gray-800 font-medium ">Hi,</span>

              <span className="ml-1 font-bold text-green-500">
                {userData ? userData.name : "xyz"}
              </span>
            </div>
          </div>
          <p
            onClick={handleClick}
            className="ml-4 text-sm mt-3 mb-4 text-white bg-green-500 w-fit px-5 py-2 font-medium  cursor-pointer"
          >
            Click to add store
          </p>
          <hr />
          <div className="mt-4">
            <p className="ml-4 text-sm mt-3 text-green-500 bg-green-200 w-fit px-5 py-2 font-medium  cursor-pointer">
              List of all your stores
            </p>
            <AllStore />
          </div>
        </div>
      </Sidebar>
      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <AddStore fetchStores={fetchStores} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Store;
