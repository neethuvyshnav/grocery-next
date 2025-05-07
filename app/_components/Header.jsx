"use client";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboardIcon,
  LayoutGrid,
  LucideGrid,
  Search,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { Input } from "postcss";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";

function Header() {
  const [catogoryList, setCatogoryList] = useState([]);
  const getCatoryList = () =>
    GlobalApi.getCatogory().then((resp) => setCatogoryList(resp.data.data));
  useEffect(() => {
    getCatoryList();
  }, []);
  return (
    <div className="p-5  shadow-sm flex justify-between">
      <div className="items-center gap-8 flex">
        <Image
          src="/logo.png"
          alt="logo"
          height="56"
          width="75" //set a width or height
          className="h-auto"
        />

        <DropdownMenu asChild>
          <DropdownMenuTrigger className="outline-none" >
            {" "}
            <h2 className="md:flex hidden gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" />
              Catagory
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Catagory</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {catogoryList?.map((catogory, index) => (
              // console.log(
              //   catogory?.icon[0],"lll")
              <DropdownMenuItem key={index} className='flex gap-4 items-center cursor-pointer'>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKENDED_BASEURL+
                    catogory?.icon[0]?.url
                  }
                  alt="icon"
                  height="30"
                  width="27" //set a width or height
                  className="h-auto"
                  unoptimized={true}
                />
                <h2 className="text-lg"> {catogory?.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="md:flex gap-3 items-center rounded-full p-2 border hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          {" "}
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
