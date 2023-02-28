import { createClient } from "@supabase/supabase-js";
import { env } from "~/env.mjs";

export const supabase = createClient(
  `https://${env.SUPABASE_URL}.supabase.co`,
  env.SUPABASE_ANON_KEY
);
