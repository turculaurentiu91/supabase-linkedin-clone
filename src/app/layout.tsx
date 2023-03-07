import "server-only";

import { type PropsWithChildren } from "react";
import SupabaseProvider from "~/components/supabase-provider";
import SupabaseListener from "~/components/supabase-listener";
import { createClient } from "~/utils/supabase-server";
import AuthLayout from "~/components/layouts/auth.layout";

import "~/styles/globals.css";
import GuestLayout from "~/components/layouts/guest.layout";

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }: PropsWithChildren) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("session", session);

  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {session ? (
            <AuthLayout>{children}</AuthLayout>
          ) : (
            <GuestLayout>{children}</GuestLayout>
          )}
        </SupabaseProvider>
      </body>
    </html>
  );
}
