import { createContext, useState } from "react";

export const VendorContext = createContext();

export const VendorContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(false);
  return (
    <VendorContext.Provider
      value={{ userData, setUserData, loader, setLoader }}
    >
      {children}
    </VendorContext.Provider>
  );
};
