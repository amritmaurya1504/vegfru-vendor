import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$3456</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-500 text-white text-lg flex justify-center items-center p-2 rounded-lg">
          +18%
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$741,23,3456</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <p className="bg-green-500 text-white text-lg flex justify-center items-center p-2 rounded-lg">
          +10%
        </p>
      </div>
      <div className=" bg-white flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">11,456</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <p className="bg-green-500 text-white text-lg flex justify-center items-center p-2 rounded-lg">
          +15%
        </p>
      </div>
    </div>
  );
};

export default TopCards;
