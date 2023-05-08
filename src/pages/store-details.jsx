import Sidebar from '@/components/Sidebar'
import { VendorContext } from '@/context/VendorContext'
import React, { useContext } from 'react'
import { BsArrowBarRight } from "react-icons/bs"

const StoreDetails = () => {
    const { userData } = useContext(VendorContext)
    return (
        <Sidebar>
            <div className="bg-gray-100 min-h-screen">
                <div className="flex justify-between px-4 pt-4">
                    <h2 className="text-gray-800 font-semibold flex items-center gap-3">Store <BsArrowBarRight /> Ramesh Vendor</h2>
                    <div className="flex justify-center items-center mr-2">
                        <span className=" text-gray-800 font-medium ">Hi,</span>

                        <span className="ml-1 font-bold text-green-500">{userData ? userData.name : "xyz"}</span>
                    </div>
                </div>
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 md:px-24 py-12 md:flex-row flex-col items-center">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                                <br class="hidden lg:inline-block" />readymade gluten
                            </h1>
                            <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                            <div class="flex justify-center">
                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                            </div>
                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img class="object-cover object-top rounded" alt="hero" src="https://th.bing.com/th/id/OIP.8F_ot_r0tmW_p3Y_8DPp6QHaE8?pid=ImgDet&w=1000&h=667&rs=1" />
                        </div>
                    </div>
                </section>
            </div>
        </Sidebar>
    )
}

export default StoreDetails
