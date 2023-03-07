import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "types";

const protectedRoutes = ["/feed"];
const publicOnlyRoutes = ["/login", "/register", "/"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data: { session },
  } = await supabase.auth.getSession();

  const url = req.nextUrl.clone();

  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (session && publicOnlyRoutes.includes(req.nextUrl.pathname)) {
    url.pathname = "/feed";
    return NextResponse.redirect(url);
  }

  return res;
}
