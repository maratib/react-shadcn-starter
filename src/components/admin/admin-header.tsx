import React, { FC } from "react";
import { ThemeToggle } from "@/components/misc/theme-toggle";
import { AdminRoutes } from "@/routes/admin-router";
import { Link } from "react-router-dom";
import { Icons } from "../misc/icons";
import { cn } from "@/lib/utils";

type Props = {
  name?: string;
};

export const AdminHeader: FC<Props> = ({ name }) => (
  <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
    <nav className="h-14 flex items-center justify-between px-4">
      <div className="hidden lg:block">
        <Link to="/admin" className="flex">
          <Icons.logo className="mr-2 h-6 w-6" />{" "}
          <span className="font-bold text-lg">LOMPA</span>
        </Link>
      </div>
      <div className={cn("block lg:!hidden")}>{/* <MobileSidebar /> */}</div>

      <div className="flex items-center gap-2">
        {/* <Profile /> */}
        <ThemeToggle />
      </div>
    </nav>
  </div>
);
