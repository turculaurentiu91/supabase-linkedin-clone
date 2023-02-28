import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { type Database } from "types";

export const createClient = () => createBrowserSupabaseClient<Database>();
