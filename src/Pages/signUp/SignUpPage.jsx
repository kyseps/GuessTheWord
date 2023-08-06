import React from "react";
import SignUpForm from "./SignupForm";

export default function SignUpPage() {
  return (
    <div className="bg-gradient-to-r from-[#28D669] to-[#E1C45A] flex flex-col justify-center gap-4 place-items-center h-[86vh] 2xl:h-[83.2vh]">
      <h1 className="text-2xl">SignUp</h1>
      <SignUpForm />
    </div>
  );
}
