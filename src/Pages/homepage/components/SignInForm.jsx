import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { supabase } from "../../../utils/supabase/supabase";
("../../../utils/supabase/supabase");

export default function SignInForm() {
  async function signUpUser() {
    const { data, error } = await supabase.auth.signUp({
      email: "",
      password: "",
    });
  }

  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      Email: "example@gmail.com",
      Password: "!Aa1",
    },
  });
  return (
    <div className=" bg-[#333333c2] w-6/12 h-3/12 px-3 py-6">
      <form className="flex gap-2 flex-col" onSubmit={handleSubmit()}>
        <label className="font-black" htmlFor="Email">
          Email
        </label>
        <input
          autoFocus
          className="font-semibold p-1"
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/,
              message: "Invalid email format",
            },
          })}
        />
        <label className="font-black" htmlFor="Password">
          Password
        </label>
        <input
          className="font-semibold p-1"
          type="password"
          {...register("Password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message: "Password not valid ",
            },
          })}
        />
        <div className="flex gap-4">
          <p>Don't have an account yet?</p>
          <Link to="/signUp" replace className="text-blue-800">
            SignUp
          </Link>
          <p>now</p>
        </div>
        <button
          className="border-2 border-slate-950 bg-slate-700 h-12 w-24 mx-auto mt-6"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
