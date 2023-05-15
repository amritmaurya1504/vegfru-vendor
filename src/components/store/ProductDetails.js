import React from "react";

const ProductDetails = () => {
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
            src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1683186003/veg3_cwi5wv.webp"
            alt="onion"
            className="md:h-[240px] md:w-[280px] h-[160px] w-[200px]"
          />
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-semibold tracking-tight sm:text-3xl text-xl">
              {" "}
              Onion
            </span>
          </div>
          <div className="flex gap-3 items-center mt-2">
            <span className="text-gray-900 font-medium tracking-tight sm:text-xl text-lg">
              {" "}
              Category
            </span>
            <p className="text-gray-500 sm:text-xl text-lg"> Vegetable </p>
          </div>
        </div>
        {/* Form */}
        <div className="">
          <form action="#" method="POST" className="space-y-6">
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
                  <option value="kgram" class="py-2 px-4">
                    kg
                  </option>
                  <option value="gram" class="py-2 px-4">
                    gm
                  </option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 flex w-full justify-center border-transparent bg-green-500 py-4 px-4 text-sm font-medium text-white shadow-sm "
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
