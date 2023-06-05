import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import axios from "axios";
import { VendorContext } from "@/context/VendorContext";
import { BeatLoader, ClipLoader } from "react-spinners";

const override = {
  display: "block",
  marginBottom: "12px",
  marginLeft: "60px",
};

const mapbox_url = `https://api.mapbox.com/styles/v1/${process.env.NEXT_PUBLIC_MAPBOX_USERNAME}/clgjqyhee007o01qt6l1veo00/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`;

const AddAddress = ({ fetchStores }) => {
  const { loader, setLoader, axiosConfig, imageUrl, uploadImage, imageLoader } =
    useContext(VendorContext);
  const [position, setPosition] = useState([
    24.79039723056424, 78.53669117764389,
  ]);
  const [location, setLocation] = useState(null);
  const [currentPlace, setCurrentPlace] = useState();
  const [formData, setFormData] = useState({
    storeName: "",
    storeAddress: "",
    landmark: "",
    storeType: "",
  });

  const getPlace = async (location) => {
    try {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location[1]},${location[0]}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`
      );
      const address = `${res.data.features[0].place_name}`;
      setCurrentPlace(address);
      // console.log(currentPlace)
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // get current location geo coordinates

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([22.491719342582865, 88.39950042285479]);
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );
  };

  // fly to current location in map

  const MyLocation = () => {
    const customIcon = new Icon({
      iconUrl:
        "https://res.cloudinary.com/amritrajmaurya/image/upload/v1681851333/location-pin_kd0ujy.png",
      iconSize: [48, 48],
    });
    const map = useMap();
    if (location) {
      map.flyTo(location, 15);
      getPlace(location);
      return (
        <>
          <Marker position={location} icon={customIcon}>
            <Popup>You are here</Popup>
          </Marker>
        </>
      );
    }
    return null;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // submit form

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const axiosConfig = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    };
    try {
      const storeData = {
        storeName: formData.storeName,
        storeType: formData.storeType,
        landmark: formData.landmark,
        storeAddress: formData.storeAddress + " " + currentPlace,
        storeImage: imageUrl,
        long: location[1],
        lat: location[0],
      };

      console.log(storeData);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vendor/add-store`,
        storeData,
        axiosConfig
      );
      toast.success(data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      fetchStores();
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    setLoader(false);
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-col space-y-8 md:pl-10 md:pr-24">
        <div className="flex justify-between items-center mt-12">
          <div>
            <h3 className="text-4xl font-semibold mb-2">
              Add <span className="text-green-500"> Store</span>
            </h3>
            <div class="border-b-2 border-black mt-4 w-8"></div>
          </div>
        </div>
        {/* Map */}
        <div>
          <MapContainer center={position} zoom={13} style={{ height: "200px" }}>
            <MyLocation />
            <TileLayer
              url={mapbox_url}
              attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
            />
          </MapContainer>
          <a
            onClick={getLocation}
            className="cursor-pointer border-2 border-gray-200 text-sm px-4 py-2"
          >
            Know your location
          </a>
        </div>
        {/* Form */}
        <div className="">
          <form action="#" method="POST" className="space-y-6">
            <div className="">
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Current location
                </p>
                <input
                  value={currentPlace}
                  id="text"
                  name="text"
                  type="text"
                  placeholder=""
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-400 shadow-sm sm:text-sm"
                />
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Store Name
                </p>
                <input
                  name="storeName"
                  value={formData.name}
                  onChange={handleInputChange}
                  id="text"
                  type="text"
                  placeholder="eg. Ramesh Vendor"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 placeholder:text-sm shadow-sm sm:text-sm"
                />
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Enter complete address
                </p>
                <input
                  id="text"
                  name="storeAddress"
                  value={formData.storeAddress}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="eg. Near XYZ Building"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Landmark
                </p>
                <input
                  id="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleInputChange}
                  type="text"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div className="border-r border-l border-b">
                <p
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Select store type
                </p>
                <select
                  id="fruits"
                  name="storeType"
                  value={formData.storeType}
                  onChange={handleInputChange}
                  class="outline-none mt-2 block w-full py-2 px-4 rounde text-gray-400"
                >
                  <option value="">--Please choose an option--</option>
                  <option value="Vegetable" class="py-2 px-4">
                    Vegetable Only
                  </option>
                  <option value="Fruits" class="py-2 px-4">
                    Fruits Only
                  </option>
                  <option value="both" class="py-2 px-4">
                    Vegetable & Fruits
                  </option>
                </select>
              </div>
              <div className="border-r border-l border-t border-b">
                <p
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  {imageLoader ? (
                    <ClipLoader color="#3675d6" size={15} />
                  ) : (
                    "Upload Store Image"
                  )}
                </p>
                <input
                  onChange={(e) => uploadImage(e.target.files[0])}
                  id="file"
                  name="file"
                  type="file"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="mt-4 flex w-full justify-center border-transparent bg-green-500 py-4 px-4 text-sm font-medium text-white shadow-sm "
              >
                {loader ? <BeatLoader color="white" /> : "Add Store"}
              </button>
              <p className="text-xs mt-2 text-[#686b78] font-normal">
                By clicking on Add Store , you can add{" "}
                <span className="text-black">your store.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
