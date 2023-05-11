import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { VendorContext } from "@/context/VendorContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";

const override = {
  marginBottom: "10px",
};

const Login = ({ setAuthType }) => {
  const { userData, setUserData, loader, setLoader } =
    useContext(VendorContext);
  // get data -> handlesign asyn function -> clg

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignin = async () => {
    try {
      const loginData = {
        phone,
        password,
      };
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoader(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vendor/login`,
        loginData,
        config
      );
      setUserData(data.userLogin);
      localStorage.setItem("token", JSON.stringify(data.token));
      setLoader(false);
      router.push("/");
    } catch (error) {
      toast.warning(error.response?.data.message);
      setLoader(false);
    }
  };

  useEffect(() => {
    document.title = "Vendor | Signin";
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        <div>
          <h3 className="text-4xl font-semibold mb-2">Login</h3>
          <p>
            or &nbsp;
            <span
              onClick={() => setAuthType("signup")}
              className="text-[#096F65] font-semibold cursor-pointer"
            >
              create an account
            </span>
          </p>
          <div class="border-b-2 border-black mt-2 w-8"></div>
        </div>
        <div class="relative mt-8 bg-white border border-gray-300  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <label
            for="phone"
            className="leading-7 text-xs text-gray-400 ml-2 mt-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            class="w-full text-base outline-none text-gray-700 py-1 px-3 leading-8 bg-white"
          />
        </div>
        <div class="relative mb-4  bg-white border border-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <label
            for="password"
            class="leading-7 text-xs text-gray-400 ml-2 mt-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="w-full text-base outline-none text-gray-700 py-1 px-3 leading-8 bg-white"
          />
        </div>

        <button
          onClick={handleSignin}
          class="text-white bg-[#B33331] border-0 py-4 px-6 focus:outline-none hover:bg-[#ab4442] w-full text-lg font-light"
        >
          {loader ? (
            <PropagateLoader color="white" cssOverride={override} />
          ) : (
            "Signin"
          )}
        </button>

        <p className="text-xs mt-2 text-[#686b78] font-normal">
          By clicking on Login, I accept the{" "}
          <span className="text-black">
            Terms & Conditions & Privacy Policy.
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
