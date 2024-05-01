import React, { FC } from "react";

type Props = {
  name?: string;
};

export const AdminFooter: FC<Props> = ({ name }) => (
  <div>
    <h1>Admin Footer</h1>
  </div>
);
