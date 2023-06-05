import React, { useContext } from "react";
import Link from "next/link";
import { VendorContext } from "@/context/VendorContext";
import { HashLoader } from "react-spinners";
import { useRouter } from "next/router";

const AllStore = () => {
  const router = useRouter();
  const { stores, loader } = useContext(VendorContext);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap -m-4">
          {loader ? (
            <div className="flex mx-auto mt-28">
              <HashLoader color="#22c55e" />
            </div>
          ) :
            <>
              {stores?.length != 0 ? (
                stores.map((curr) => {
                  return (
                    <>
                      <div key={curr._id} class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <img
                            class="lg:h-48 md:h-36 w-full object-cover object-top"
                            src={curr.storeImage}
                            alt="blog"
                          />
                          <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              {curr.storeType === "both"
                                ? "VEGETABLE & FRUIT"
                                : curr.storeType.toUpperCase()}
                            </h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                              {curr.storeName}
                            </h1>
                            <p class="leading-relaxed">{curr.storeAddress}</p>
                            <small>Landmark : {curr.landmark}</small>
                            <div class="flex items-center flex-wrap mt-3">
                              <Link
                                href={`/store-details/${curr._id}`}
                                class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer "
                              >
                                More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </Link>
                              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                  />
                                </svg>

                                {curr.like.length}
                              </span>
                              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg
                                  class="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                                {curr.comments.length}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <p className="flex items-center mx-auto justify-center h-[50vh] text-3xl">
                  Add your Stores here!
                </p>
              )}
            </>
          }

        </div>
      </div>
    </section>
  );
};

export default AllStore;
