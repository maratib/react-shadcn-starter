import React, { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  name?: string;
};

export const AdminRoutes: FC<Props> = ({ name }) => (
  <div className="flex gap-6">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);
