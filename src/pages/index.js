import TopCards from "../components/TopCards";
import Header from "../components/Header";
import BarChart from "../components/BarChart";
import RecentOrders from "../components/RecentOrders";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { VendorContext } from "@/context/VendorContext";

export default function Home() {
  const { userData } = useContext(VendorContext);
  const router = useRouter();

  useEffect(() => {
    if (!userData) {
      router.push("/auth");
    }
  }, []);
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
