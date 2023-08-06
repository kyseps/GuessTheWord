import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import SignInForm from "./components/SignInForm";

export default function HomePage() {
  const [user, setUser] = useState(null);
  return (
    <div className="bg-gradient-to-r from-[#28D669] to-[#E1C45A] flex flex-col gap-4 justify-center place-items-center h-[86vh] 2xl:h-[83.2vh]">
      {!user && <h1 className="text-2xl">Login</h1>}
      {user ? <UserProfile /> : <SignInForm />}
    </div>
  );
}
