import TopCards from "../components/dashboard/TopCards";
import Header from "../components/menubar/Header";
import BarChart from "../components/dashboard/BarChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import Sidebar from "../components/menubar/Sidebar";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { VendorContext } from "@/context/VendorContext";

export default function Home() {
  const { userData } = useContext(VendorContext);

  useEffect(() => {
    document.title = "Vendor | Dashboard";
  }, []);
  return (
    <Sidebar>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </Sidebar>
  );
}
