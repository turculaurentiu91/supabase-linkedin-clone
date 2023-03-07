import { type FC, type PropsWithChildren } from "react";
import LogoutBtn from "./logout-btn.client";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <LogoutBtn />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
