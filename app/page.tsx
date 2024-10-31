import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons";

import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import ChartComponent from "@/components/chart/chartcomponent";
// import ChartComponent from "@/components/chart/chartcomponent";

type Props = {};

type ItemCard = {
  key: string;
  label: string;
  price: number;
  size: number;
  icon: IconType;
  color: "black" | "green" | "red";
};

const Dashboard = (props: Props) => {
  const itemCard: ItemCard[] = [
    {
      key: "transactions",
      label: "Transactions",
      price: 2000000,
      icon: FaMoneyCheckDollar,
      size: 50,
      color: "black",
    },
    {
      key: "total income",
      label: "Total Income",
      price: 3000000,
      icon: FaArrowAltCircleUp,
      size: 50,
      color: "green",
    },
    {
      key: "total expense",
      label: "Total Expense",
      price: 50000000,
      icon: FaArrowAltCircleDown,
      size: 50,
      color: "red",
    },
  ];

  return (
    <>
      <div className="grid  gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {itemCard.map((item: ItemCard) => {
          return (
            <Card key={item.key}>
              <CardContent className="h-32 flex  items-center justify-between w-full">
                <div className="flex flex-col justify-center w-full h-full gap-3">
                  <p className="text-lg font-bold">{item.label}</p>
                  <p className="font-bold">{item.price}</p>
                </div>
                <span>{<item.icon size={item.size} color={item.color} />}</span>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="my-8">
        <p className="text-md sm:text-2xl font-bold whitespace-nowrap">
          Income & Expense Last Year
        </p>
        <div className="space-y-8 my-8">
          <ChartComponent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
