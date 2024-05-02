import { FC, ReactNode } from "react";
import { AdminHeader } from "../components/admin/admin-header";
import { ThemeProvider } from "@/providers/theme-provider";
import { ScrollArea } from "@radix-ui/themes";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: ReactNode;
};

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <AdminHeader />
        <div className="flex overflow-hidden">
          <AdminSidebar />
          <ScrollArea className="h-full">
            <main className="w-full pt-16">{children}</main>
          </ScrollArea>
        </div>
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default AdminLayout;
