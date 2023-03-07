"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSupabase } from "~/components/supabase-provider";

export default function RegisterForm() {
  const { supabase } = useSupabase();
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const { error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        });
        if (error) {
          console.log("error", error);
        } else {
          console.log("success");
          router.push("/");
        }
      })}
    >
      <input {...register("email")} />
      <input {...register("password")} />
      <button type="submit">Register</button>
    </form>
  );
}
