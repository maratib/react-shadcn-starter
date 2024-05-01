import React, { FC } from "react";

type Props = {
  name?: string;
};

export const AdminHeader: FC<Props> = ({ name }) => (
  <div>
    <h1>Admin Header</h1>
  </div>
);
