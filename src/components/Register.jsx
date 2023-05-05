import React, { useEffect } from "react";

const Register = ({ setAuthType }) => {
  useEffect(() => {
    document.title = "Vendor | Signup";
  }, []);
  return (
    <div>
      <h3 className="text-4xl font-semibold mb-2">Signup</h3>
      <p>
        or &nbsp;
        <span
          onClick={() => setAuthType("login")}
          className="text-[#096F65] font-semibold cursor-pointer"
        >
          login to your account
        </span>
      </p>
      <div class="border-b-2 border-black mt-2 w-8"></div>
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
          class="w-full text-base outline-none text-gray-700 py-1 px-3 leading-8 bg-white"
        />
      </div>
      <div class="relative bg-white border border-gray-300  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <label for="name" className="leading-7 text-xs text-gray-400 ml-2 mt-2">
          Enter Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full text-base outline-none text-gray-700 py-1 px-3 leading-8 bg-white"
        />
      </div>
      <div class="relative bg-white border border-gray-300  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <label
          for="email"
          className="leading-7 text-xs text-gray-400 ml-2 mt-2"
        >
          Enter Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full text-base outline-none text-gray-700 py-1 px-3 leading-8 bg-white"
        />
      </div>
      <div class="relative mb-4  bg-white border border-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <label for="password" class="leading-7 text-xs text-gray-400 ml-2 mt-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          class="w-full text-base outline-none text-gray-700 py-1 px-3 leading-8 bg-white"
        />
      </div>
      <button class="text-white bg-[#B33331] border-0 py-4 px-6 focus:outline-none hover:bg-[#ab4442] w-full text-base">
        Continue
      </button>

      <p className="text-xs mt-2 text-[#686b78] font-normal">
        By clicking on Login, I accept the{" "}
        <span className="text-black">Terms & Conditions & Privacy Policy.</span>
      </p>
    </div>
  );
};

export default Register;
