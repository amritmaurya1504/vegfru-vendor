import { createContext, useState } from "react";
import axios from "axios";

export const VendorContext = createContext();

export const VendorContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [stores, setStores] = useState();
  const [imageLoader, setImageLoader] = useState(false);
  const [orders, setOrders] = useState([]);

  // upload images
  const uploadImage = (image) => {
    setImageLoader(true);
    console.log(image);
    const filename = image.name;
    const ext = filename.split(".").pop();
    if (ext === "jpg" || ext === "png" || ext === "jpeg") {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
      data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_USERNAME);
      fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImageUrl(data.url.toString());
          setImageLoader(false);
        })
        .catch((err) => {
          toast.error(err, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setImageLoader(false);
        });
    } else {
      toast.warning("Please select a valid image [Either JPEG or PNG]", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setImageLoader(false);
    }
  };

  // fetch orders

  const fetchOrder = async () => {
    try {
      setLoader(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      };

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/order/vendor/get-order`,
        config
      );
      console.log(data);
      setOrders(data.orderData);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  return (
    <VendorContext.Provider
      value={{
        userData,
        setUserData,
        loader,
        setLoader,
        imageUrl,
        uploadImage,
        setStores,
        stores,
        imageLoader,
        fetchOrder,
        orders,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};
