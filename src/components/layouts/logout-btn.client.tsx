"use client";

import { useRouter } from "next/navigation";
import { type FC } from "react";
import { useSupabase } from "../supabase-provider";

const LogoutBtn: FC = () => {
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("error logging out", error);
    } else {
      router.push("/");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutBtn;
