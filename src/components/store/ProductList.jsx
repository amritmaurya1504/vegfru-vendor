import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import {
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import axios from "axios";

const ProductList = ({ productArray }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(productArray);

  // state for handling product details

  const [singleProduct, setSingleProduct] = useState();
  const handleClick = (item) => {
    setSingleProduct(item);
    onOpen();
  };

  // change product status
  const handleProductStatus = async (item) => {
    try {
      const axiosConfig = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vendor/change-status/${item._id}`,
        { productId: item._id },
        { status: item.status },
        axiosConfig
      );
      if (data.success) {
        console.log("Status changed successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-24">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h3 className="text-3xl font-semibold mb-2">
              Product <span className="text-green-500"> List</span>
            </h3>
            <div class="border-b-2 border-black mt-4 w-8"></div>
            <p className="mt-2 text-base text-gray-700">
              List of all products of the shop are displayed in the table below.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Badge variant="outline" colorScheme="green" fontSize="1.0em">
              Total Products: {productArray.length}
            </Badge>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                {productArray.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-300 overflow-none z-0">
                    <thead className="bg-green-100">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          SNo
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Category
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Price per Unit (in &#8377;)
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Current Stock (in kg)
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {productArray?.map((item, i) => {
                        return (
                          <>
                            <tr key={i}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <span>{i + 1}</span>
                              </td>
                              <td className="whitespace-nowrap py-4 pl-3 text-sm sm:pl-6">
                                <div className="flex items-center gap-5">
                                  <div className="h-10 w-10 flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src={`${item.productImage}`}
                                      alt={`${item.productName}`}
                                    />
                                  </div>
                                  <div className="font-medium text-gray-900">
                                    {item.productName}
                                  </div>
                                </div>
                              </td>

                              <td className="whitespace-nowrap px-3 py-4  text-gray-500">
                                <div className="text-gray-500 font-medium text-xs uppercase">
                                  {" "}
                                  {item.productCategory}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {" "}
                                <div className="text-gray-500  font-medium">
                                  &#8377; {item.productPrice} /
                                  {item.productBaseUnit}
                                  {item.productUnit}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <div className="text-gray-500 font-medium ml-10">
                                  {item.totalAvailable / 1000} kg
                                </div>
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <div className="flex justify-between">
                                  <span
                                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                      item.status == "available"
                                        ? "bg-green-100 , text-green-800"
                                        : "bg-orange-200 , text-orange-800"
                                    }`}
                                  >
                                    {item.status}
                                  </span>
                                  <Menu closeOnBlur="true">
                                    <MenuButton
                                      data-tooltip-id="options"
                                      data-tooltip-content="More Options"
                                      data-tooltip-place="top"
                                    >
                                      <BiDotsVerticalRounded />
                                      <Tooltip id="options" />
                                    </MenuButton>
                                    <MenuList>
                                      <MenuItem
                                        className="hover:bg-green-100"
                                        onClick={() => handleClick(item)}
                                      >
                                        Show Product Details
                                      </MenuItem>
                                      <MenuItem
                                        className="hover:bg-green-100"
                                        onClick={() =>
                                          handleProductStatus(item)
                                        }
                                      >
                                        Change Status
                                      </MenuItem>
                                      <MenuItem className="hover:bg-green-100">
                                        Delete
                                      </MenuItem>
                                    </MenuList>
                                  </Menu>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <p className="flex items-center mx-auto justify-center h-[50vh] text-3xl">
                    Add your Products here.
                  </p>
                )}

                <Drawer
                  onClose={onClose}
                  isOpen={isOpen}
                  size="lg"
                  placement="left"
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                      <ProductDetails product={singleProduct} />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
