import "server-only";

import { type FC, type PropsWithChildren } from "react";
import SupabaseProvider from "~/components/supabase-provider";
import SupabaseListener from "~/components/supabase-listener";
import { createClient } from "~/utils/supabase-browser";

import "~/styles/globals.css";

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }: PropsWithChildren) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
