import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <section className="flex bg-[#333333] border-b-4 border-[#28D669]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex bg-red-500 rounded-3xl">
          <Avatar className="">
            <AvatarImage
              src="./vcPic.jpg"
              className="rounded-full h-10 w-10 border-2 border-[#E1C45A]"
            />
            <AvatarFallback>prof</AvatarFallback>
          </Avatar>
          <Button variant="destructive" className="h-10 w-12 text-[12px]">
            LogOut
          </Button>
        </div>

        <img src="/gtw.jpg" alt="" className="w-28 h-16" />
        <div className="flex  justify-center content-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img src="/LOGO.svg" alt="" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>How to play</DropdownMenuItem>
              <DropdownMenuItem>Report a bug</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem>About Us</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
