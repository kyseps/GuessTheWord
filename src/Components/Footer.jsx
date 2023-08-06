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
      <NavLink to="/Game" className="w-full h-auto flex justify-center p-2">
        <LuGamepad className="w-8 h-8 self-center" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-12" />

      <NavLink to="/teams" className="w-full h-auto flex justify-center">
        <RiTeamLine className="w-8 h-8 self-center" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-12" />

      <NavLink to="/buyGem" className="w-full h-auto flex justify-center">
        <BsGem className="w-8 h-8 self-center" />
      </NavLink>

      <Separator orientation="vertical" className="bg-[#28D669] h-12" />

      <NavLink to="/" className="w-full h-auto flex justify-center">
        <CgProfile className="w-8 h-8 self-center" />
      </NavLink>
    </nav>
  );
}
