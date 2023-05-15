import Sidebar from "@/components/menubar/Sidebar";
import { VendorContext } from "@/context/VendorContext";
import React, { useContext, useEffect } from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import AddProduct from "@/components/store/AddProduct";
import ProductList from "@/components/store/ProductList";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BeatLoader, HashLoader } from "react-spinners";

const StoreDetails = () => {
  const { userData, setLoader, loader } = useContext(VendorContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [singleStore, setSingleStore] = useState();
  const router = useRouter();
  const storeId = router.query.storeId;
  const [loaderTwo, setLoaderTwo] = useState(false);

  const getStoreById = async () => {
    setLoader(true);
    try {
      const axiosConfig = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vendor/get-store/${storeId}`,
        axiosConfig
      );
      console.log(data);
      setSingleStore(data.store);
    } catch (error) {
      toast.info(error.response?.data.message);
    }
    setLoader(false);
  };

  useEffect(() => {
    getStoreById();
  }, []);

  const handleDelete = async (_id) => {
    setLoaderTwo(true);
    try {
      const axiosConfig = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vendor/delete-store/${_id}`,
        axiosConfig
      );
      router.push("/store");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
    setLoaderTwo(false);
  };

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <Sidebar>
        {loader && (
          <div className="flex h-screen items-center justify-center mt-4">
            <HashLoader color="#22c55e" />
          </div>
        )}
        {singleStore && (
          <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-between px-4 pt-4">
              <h2 className="text-gray-800 font-semibold flex items-center gap-3">
                <p
                  className="cursor-pointer"
                  onClick={() => router.push("/store")}
                >
                  <Badge variant="outline" colorScheme="green">
                    Store
                  </Badge>
                </p>{" "}
                <BsArrowBarRight /> {singleStore.storeName}
              </h2>
              <div className="flex justify-center items-center mr-2">
                <span className=" text-gray-800 font-medium ">Hi,</span>

                <span className="ml-1 font-bold text-green-500">
                  {userData ? userData.name : "xyz"}
                </span>
              </div>
            </div>
            <section class="text-gray-600 body-font">
              <div class="container mx-auto flex px-5 md:px-24 py-12 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                    {singleStore.storeName}
                  </h1>
                  <span class="tracking-widest sm:text-xl text-sm title-font font-medium mb-4  text-gray-400">
                    {singleStore.storeType === "both"
                      ? "VEGETABLES & FRUITS"
                      : singleStore.storeType.toUpperCase()}
                  </span>

                  <div className="flex flex-col">
                    <p class="mb-4 leading-relaxed">
                      {singleStore.storeAddress}
                    </p>
                    <p class="mb-8 leading-relaxed">
                      <span className="leading-relaxed font-semibold">
                        {" "}
                        Landmark :{" "}
                      </span>
                      {singleStore.landmark}
                    </p>
                  </div>

                  <div class="flex justify-center">
                    <button
                      class="inline-flex text-white bg-green-500 border-0 py-2 px-4 text-sm lg:text-base focus:outline-none hover:bg-green-600 font-medium justify-between items-center gap-2"
                      onClick={handleClick}
                    >
                      Add Product{" "}
                      <IoMdAdd
                        color="white"
                        fontSize="1.5em"
                        fontWeight="600"
                      />
                    </button>
                    <button
                      onClick={() => handleDelete(singleStore._id)}
                      class="ml-4 inline-flex text-white bg-red-600 border-0 py-2 px-4 text-sm lg:text-base focus:outline-none hover:bg-red-700 font-medium justify-between items-center gap-2"
                    >
                      {loaderTwo ? (
                        <BeatLoader color="white" />
                      ) : (
                        <>
                          Delete Store <RiDeleteBin6Line />
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    class="object-cover object-top rounded"
                    alt="hero"
                    src={singleStore.storeImage}
                  />
                </div>
              </div>
            </section>
            {/* Product lIST */}
            <ProductList />
          </div>
        )}
      </Sidebar>
      {/* add Product */}
      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <AddProduct />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default StoreDetails;
