import { useContext } from "react";
import { isSameDay, isSameYear } from "date-fns";
import { VendorContext } from "@/context/VendorContext";

// sorting an array of an object with respect to any field of the corresponding object

export const sortByField = (array, field) => {
  return array.sort((a, b) => {
    if (a[field] > b[field]) {
      return -1;
    }
    if (a[field] < b[field]) {
      return 1;
    }
    return 0;
  });
};

// calculate daily revenue

export const CalculateDailyRevenue = () => {
  const { orders } = useContext(VendorContext);

  const currentDate = new Date();

  // filter out all the orders that are made on current date

  const filteredOrders = orders.filter((date) =>
    isSameDay(new Date(date.orderDate), currentDate)
  );
  console.log(filteredOrders);
  const dailyRevenue = filteredOrders.reduce(
    (acc, curVal) => acc + curVal.billDetails.totalBill,
    0
  );
  return dailyRevenue;
};

// calculate yearly revenue

export const CalculateYearlyRevenue = () => {
  const { orders } = useContext(VendorContext);

  const currentDate = new Date();

  // filter out all the orders that are made on current date

  const filteredOrders = orders.filter((date) =>
    isSameYear(new Date(date.orderDate), currentDate)
  );

  const yearlyRevenue = filteredOrders.reduce(
    (acc, curVal) => acc + curVal.billDetails.totalBill,
    0
  );
  return yearlyRevenue;
};

// calculate the total customers

export const CalculateTotalCustomers = () => {
  const { orders } = useContext(VendorContext);
  const uniqueCustomers = Array.from(
    new Set(orders.map((item) => item.customerId.name))
  );

  return uniqueCustomers.length;
};


export const getValue = (status) => {
  if(status === "Accepted") return "1";
  else if (status === "Processing") return "2";
  else if (status === "Out for delivery") return "3";
  else if (status === "Delivered") return "4";
}