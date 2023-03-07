import Link from "next/link";
import { type FC, type PropsWithChildren } from "react";

const GuestLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
      <div>{children}</div>
    </div>
  );
};

export default GuestLayout;
