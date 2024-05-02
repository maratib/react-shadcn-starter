import { FC } from "react";
import { Link, createBrowserRouter } from "react-router-dom";

import LoginPage from "@/pages/login";
//Admin Pages
import AdminPage from "@/pages/admin/admin";
import VendorsPage from "@/pages/admin/vendors/vendors";
import CampaignsPage from "@/pages/admin/marketing/marketing";
import SettingsPage from "@/pages/admin/settings/settings";

export const AdminRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/admin/vendors",
    element: <VendorsPage />,
  },
  {
    path: "/admin/campaigns",
    element: <CampaignsPage />,
  },
  {
    path: "/admin/settings",
    element: <SettingsPage />,
  },
]);

type Props = {
  name?: string;
};

export const AdminRoutes: FC<Props> = ({ name }) => (
  <div className="flex gap-6">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);
