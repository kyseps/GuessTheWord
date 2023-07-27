import React from "react";
import { NavLink } from "react-router-dom";
import { LuGamepad } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsGem } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <nav className="flex justify-around bg-[#333333]  border-t-4 border-[#28D669]">
      <NavLink to="/" className="w-full h-full flex justify-center p-2">
        <LuGamepad className="w-8 h-8" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-12" />

      <NavLink to="/teams" className="w-full h-full flex justify-center p-2">
        <RiTeamLine className="w-8 h-8" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-12" />

      <NavLink to="/buyGem" className="w-full h-full flex justify-center p-2">
        <BsGem className="w-8 h-8" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-12" />

      <NavLink
        to="/userProfile"
        className="w-full h-full flex justify-center p-2"
      >
        <CgProfile className="w-8 h-8" />
      </NavLink>
    </nav>
  );
}
