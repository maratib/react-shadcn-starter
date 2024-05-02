import React, { useState } from "react";

import reactLogo from "@/assets/img/react.svg";

import Layout from "@/layouts/layout";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div className="card">
        <h1>Login Page</h1>
      </div>
    </Layout>
  );
};

export default LoginPage;
