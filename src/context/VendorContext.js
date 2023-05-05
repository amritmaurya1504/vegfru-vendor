import { createContext, useState } from "react";

export const VendorContext = createContext();

export const VendorContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  return (
    <VendorContext.Provider value={{ userData, setUserData }}>
      {children}
    </VendorContext.Provider>
  );
};
