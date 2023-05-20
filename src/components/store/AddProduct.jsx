import { VendorContext } from "@/context/VendorContext";
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AddProduct = () => {
  const { imageUrl, uploadImage } = useContext(VendorContext);
  const router = useRouter();
  const storeId = router.query.storeId;
  // collect the data from the form
  const [formdata, setFormdata] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    productUnit: "",
  });

  // set the collected data
  const handleInputChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const axiosConfig = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    };
    try {
      const productData = {
        productName: formdata.productName,
        productCategory: formdata.productCategory,
        productPrice: formdata.productPrice,
        productUnit: formdata.productUnit,
        productImage: imageUrl,
      };

      const { data } = await axios.post(
        `https://api-vegfru.online/api/vendor/add-product/${storeId}`,
        productData,
        axiosConfig
      );
      console.log(data);
      console.log(storeId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col space-y-8 md:pl-10 md:pr-24">
        <div className="flex justify-between items-center mt-12">
          <div>
            <h3 className="text-4xl font-semibold mb-2">
              Add <span className="text-green-500"> Product</span>
            </h3>
            <div class="border-b-2 border-black mt-4 w-8"></div>
          </div>
        </div>
        {/* Form */}
        <div className="">
          <form method="POST" className="space-y-6">
            <div className="">
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Product Name
                </p>
                <input
                  id="text"
                  name="productName"
                  type="text"
                  value={formdata.productName}
                  onChange={handleInputChange}
                  placeholder="eg. potato/apple"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor="productCategory"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  category
                </p>
                <input
                  id="text"
                  name="productCategory"
                  type="text"
                  placeholder="eg. fruit/vegetable"
                  value={formdata.productCategory}
                  onChange={handleInputChange}
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 placeholder:text-sm shadow-sm sm:text-sm"
                />
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor=""
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Price
                </p>
                <input
                  id="text"
                  name="productPrice"
                  type="text"
                  value={formdata.productPrice}
                  onChange={handleInputChange}
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>

              <div className="border-r border-l border-b">
                <p
                  htmlFor=""
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Select Unit
                </p>
                <select
                  id="unit"
                  name="productUnit"
                  value={formdata.productUnit}
                  onChange={handleInputChange}
                  class="outline-none mt-2 block w-full py-2 px-4 rounde text-gray-400"
                >
                  <option value="">--Please choose an option--</option>
                  <option value="kg" class="py-2 px-4">
                    kg
                  </option>
                  <option value="gm" class="py-2 px-4">
                    gm
                  </option>
                </select>
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Upload product image
                </p>
                <input
                  onChange={(e) => uploadImage(e.target.files[0])}
                  id="file"
                  name="file"
                  type="file"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 flex w-full justify-center border-transparent bg-green-500 py-4 px-4 text-sm font-medium text-white shadow-sm "
                onClick={handleSubmit}
              >
                Add Product
              </button>
              <p className="text-xs mt-2 text-[#686b78] font-normal">
                By clicking on Add product , you can add{" "}
                <span className="text-black">your product.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
