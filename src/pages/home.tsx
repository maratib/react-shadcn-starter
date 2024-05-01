import React, { useState } from "react";

import reactLogo from "@/assets/img/react.svg";
import viteLogo from "@/assets/img/vite.svg";

import Layout from "@/components/layouts/layout";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div className="card">
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>

        <h1 className="text-red-700 text-3xl">Vite + React</h1>

        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </Layout>
  );
};

export default HomePage;
