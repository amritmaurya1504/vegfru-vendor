import "react-tooltip/dist/react-tooltip.css";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { VendorContextProvider } from "../context/VendorContext";

export default function App({ Component, pageProps }) {
  return (
    <VendorContextProvider>
      <Component {...pageProps} />
    </VendorContextProvider>
  );
}
