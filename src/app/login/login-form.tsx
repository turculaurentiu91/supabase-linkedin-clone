"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSupabase } from "~/components/supabase-provider";

export default function LoginForm() {
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
        const { error } = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });
        if (error) {
          console.log("error", error);
        } else {
          router.push("/feed");
        }
      })}
    >
      <input {...register("email")} />
      <input {...register("password")} />
      <button type="submit">Login</button>
    </form>
  );
}
