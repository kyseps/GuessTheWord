import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../utils/supabase/supabase";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

export default function SignUpForm() {
  const [fetchError, setFetchError] = useState(null);
  const { toast } = useToast();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "example@gmail.com",
      Password: "!Aa1",
    },
  });

  async function onSubmit({ Email, Password }) {
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
    });

    if (data.user) {
      toast({
        title: "SignUp successful",
        description: `check : ${data.user?.email} `,
      });

      setTimeout(() => redirect("/"), 2000);
    }

    if (error) {
      console.log(error);
    }

    setValue("Email", "");
    setValue("Password", "");
  }

  return (
    <div className=" bg-[#333333c2] w-6/12 h-3/12 px-3 py-6">
      <form className="flex gap-2 flex-col" onSubmit={handleSubmit(onSubmit)}>
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
        <ErrorMessage
          errors={errors}
          name="Email"
          render={({ message }) => <p className="text-red-600">{message}</p>}
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
        <ErrorMessage
          errors={errors}
          name="Password"
          render={({ message }) => <p className="text-red-600">{message}</p>}
        />

        <button
          className="border-2 border-slate-950 bg-slate-700 h-12 w-24 mx-auto mt-6"
          type="submit"
        >
          Sign up!
        </button>
      </form>
    </div>
  );
}
