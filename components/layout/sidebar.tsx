"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { PiMoneyWavyLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { Button } from "../ui/button";
import { CiLogout } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type MenuLink = {
  key: string;
  name: string;
  href: string;
  icon: IconType;
};

const Sidebar = () => {
  const menuLink: MenuLink[] = [
    {
      key: "dashboard",
      name: "Dashboard",
      href: "/",
      icon: MdDashboard,
    },
    {
      key: "profile",
      name: "Profile",
      href: "/dashboard/profile",
      icon: CgProfile,
    },
    {
      key: "employe",
      name: "Employe",
      href: "/dashboard/employe",
      icon: HiUserGroup,
    },
  ];
  const pathname = usePathname();
  const [collepse, setCollapse] = useState(false);

  return (
    <>
      {collepse && (
        <Button
          className="bg-white text-slate-500 rounded-full fixed  "
          onClick={() => setCollapse(!collepse)}
        >
          <IoIosArrowForward />
        </Button>
      )}
      <aside
        className={
          collepse
            ? "translate-x-[-150px] z-[999999] bg-white fixed top-0 bottom-0 hidden min-h-screen  flex-col"
            : "border fixed  z-[9999999] bg-white top-0 bottom-0 min-h-screen flex flex-col justify-between"
        }
      >
        {!collepse ? (
          <Button
            onClick={() => setCollapse(!collepse)}
            className="absolute right-[-25px] rounded-full bg-white  text-slate-500 border-black"
          >
            <IoIosArrowBack />
          </Button>
        ) : (
          <Button
            onClick={() => setCollapse(!collepse)}
            className="absolute right-[-25px] rounded-full bg-white  text-slate-500 border-black"
          >
            <IoIosArrowForward />
          </Button>
        )}

        <nav className="flex flex-col text">
          {menuLink.map((item) => {
            return (
              <Link
                className={
                  item.href === pathname
                    ? "bg-black rounded-md flex items-center px-4 text-white"
                    : "flex items-center px-4"
                }
                key={item.key}
                href={item.href}
              >
                <p>{<item.icon />}</p>
                <p className="text-md my-2 p-2 font-bold">{item.name}</p>
              </Link>
            );
          })}
        </nav>
        <div>
          <Button
            className="w-full flex gap-3 justify-between "
            variant="outline"
          >
            <p className="text-md">Logout</p>
            <span>
              <CiLogout size={20} />
            </span>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
