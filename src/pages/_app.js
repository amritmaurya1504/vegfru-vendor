import "react-tooltip/dist/react-tooltip.css";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { VendorContextProvider } from "../context/VendorContext";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <VendorContextProvider>
        <Component {...pageProps} />
      </VendorContextProvider>
    </ChakraProvider>
  );
}
