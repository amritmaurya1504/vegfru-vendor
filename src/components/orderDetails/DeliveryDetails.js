import React, { useState } from "react";
import { GrLocationPin, GrLocation } from "react-icons/gr";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
const DeliveryDetails = () => {
  const [value, setValue] = useState("1");
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <div class="p-6">
            <div className="flex  gap-2 mb-3">
              <GrLocationPin size={36} />
              <div>
                <h1 className="title-font text-lg font-semibold text-gray-900">
                  Ramesh Store I
                </h1>
                <p class="leading-relaxed">
                  Jagatipota, Kolkata 700099, West Bengal Jagatipota Kolkata
                  India
                </p>
                <small>Landmark : DMG Office</small>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-12 h-20 sm:mr-56 mr-5"
          src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1684599072/downarrow_oh3xdx.png"
          alt=""
        />
        <div>
          <div class="p-6">
            <div className="flex  gap-2 mb-3">
              <GrLocation size={40} className="mb-2" />
              <div>
                <h1 className="title-font text-lg font-semibold text-gray-900">
                  Ms. Sampriti Mukherjee
                </h1>
                <p class="leading-relaxed">
                  House no. 163,MAdurdaha, Hussainpur Kolkata 700107, West
                  Bengal India
                </p>
                <small>Landmark : Sanjeevni Medicals</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* status handling  */}

      <div className="sm:mx-5 border-t-2">
        <h3 className="text-xl font-semibold mb-4 mt-8">Manage Order Status</h3>
        <RadioGroup onChange={setValue} value={value}>
          <Stack>
            <Radio size="md" name="1" value="1" colorScheme="green">
              Accepted
            </Radio>
            <Radio size="md" name="2" value="2" colorScheme="green">
              Processing
            </Radio>
            <Radio size="md" name="3" value="3" colorScheme="green">
              Out for Delivery
            </Radio>
            <Radio size="md" name="4" value="4" colorScheme="green">
              Delivered
            </Radio>
          </Stack>
        </RadioGroup>
      </div>
    </div>
  );
};

export default DeliveryDetails;
