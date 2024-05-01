import React, { FC, ReactNode } from "react";
import { AdminHeader } from "../admin/admin-header";
import { AdminFooter } from "../admin/admin-footer";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <main>{children}</main>
      <AdminFooter />
    </>
  );
};

export default Layout;
