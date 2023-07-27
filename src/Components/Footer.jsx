import React from "react";
import { NavLink } from "react-router-dom";
import { LuGamepad } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsGem } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="flex justify-around p-2 bg-[#333333] border-t-4 border-[#28D669]">
      <NavLink to="/" className="w-full h-full flex justify-center">
        <LuGamepad className="w-8 h-8" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-8" />

      <NavLink to="/teams" className="w-full h-full flex justify-center">
        <RiTeamLine className="w-8 h-8" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-8" />

      <NavLink to="/buyGem" className="w-full h-full flex justify-center">
        <BsGem className="w-8 h-8" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-8" />

      <NavLink to="/userProfile" className="w-full h-full flex justify-center">
        <CgProfile className="w-8 h-8" />
      </NavLink>
    </div>
  );
}
