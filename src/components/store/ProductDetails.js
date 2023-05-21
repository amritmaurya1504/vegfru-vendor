import React from "react";

const ProductDetails = ({ product }) => {
  const handleEditProduct = (e) => {
    e.preventDefault();
  };
  console.log("From product Details component", product);
  return (
    <div>
      <div className="flex flex-col space-y-8 md:pl-10 md:pr-24">
        <div className="flex justify-between items-center mt-12">
          <div>
            <h3 className="text-4xl font-semibold mb-2">
              Product <span className="text-green-500"> Details</span>
            </h3>
            <div class="border-b-2 border-black mt-4 w-8"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src={`${product.productImage}`}
            alt={`${product.productName}`}
            className="sm:h-[160px] md:w-[200px]  h-[80px] w-[100px]"
          />

          <h1 class="title-font sm:text-3xl text-2xl font-medium text-gray-900">
            {product.productName}
          </h1>

          <span class="tracking-widest sm:text-base text-sm title-font font-medium mb-4  uppercase text-gray-400">
            {product.productCategory}
          </span>
          <span className="w-[80px] text-center rounded-full bg-green-100 px-2 sm:text-sm text-xs font-semibold leading-5 text-green-800">
            {product.status}
          </span>
        </div>
        {/* Form */}
        <div className="">
          <form method="POST" className="space-y-6">
            <div className="">
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor=""
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Edit Price
                </p>
                <input
                  id="text"
                  name="text"
                  type="text"
                  value={product.productPrice}
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor=""
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Edit Base Unit
                </p>
                <input
                  id="text"
                  name="text"
                  type="text"
                  value={product.productBaseUnit}
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
                  name="unit"
                  class="outline-none mt-2 block w-full py-2 px-4 rounde text-gray-400"
                >
                  <option value="">--Please choose an option--</option>
                  <option value="kgram" class="py-2 px-4" selected>
                    kg
                  </option>
                  <option value="gram" class="py-2 px-4">
                    gm
                  </option>
                </select>
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor=""
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Update Stock
                </p>
                <input
                  id="text"
                  name="text"
                  type="text"
                  value={product.totalAvailable}
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 flex w-full justify-center border-transparent bg-green-500 py-4 px-4 text-sm font-medium text-white shadow-sm "
                onClick={handleEditProduct}
              >
                Edit Product
              </button>
              <p className="text-xs mt-2 text-[#686b78] font-normal">
                By clicking on Edit product , you can edit{" "}
                <span className="text-black">your product.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
