import React, { useContext, useEffect, useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { VendorContext } from "@/context/VendorContext";
import { useRouter } from "next/router";

const auth = () => {
  const [authType, setAuthType] = useState("login");
  const { userData } = useContext(VendorContext);
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      router.push("/");
    }
  }, []);

  return (
    <section class="text-gray-600 ">
      <div class="flex justify-center items-center h-screen w-screen">
        <div class=" bg-white">
          <img
            src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1683186002/logo2_hzkpos.png"
            alt="main-icon"
            className="h-12 w-24"
          />
          <p class="leading-relaxed mb-5  text-gray-700 font-medium text-base">
            An online fruits and vegetable market place
          </p>
          {authType === "login" ? (
            <Login setAuthType={setAuthType} />
          ) : (
            <Register setAuthType={setAuthType} />
          )}
        </div>
      </div>
    </section>
  );
};

export default auth;
