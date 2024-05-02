import { FC, ReactNode } from "react";
import { AdminHeader } from "../components/admin/admin-header";
import { AdminFooter } from "../components/admin/admin-footer";
import { ThemeProvider } from "@/providers/theme-provider";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
