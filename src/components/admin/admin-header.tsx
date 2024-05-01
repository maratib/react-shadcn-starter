import { AdminRoutes } from "@/routes/admin-routes";
import React, { FC } from "react";

type Props = {
  name?: string;
};

export const AdminHeader: FC<Props> = ({ name }) => (
  <div>
    <AdminRoutes />
    <h1>Admin Header</h1>
  </div>
);
