import React, { useState } from "react";

import reactLogo from "@/assets/img/react.svg";
import viteLogo from "@/assets/img/vite.svg";

import Layout from "@/components/layouts/layout";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <Layout>
      <div className="card">
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1>About Page</h1>
      </div>
    </Layout>
  );
};

export default AboutPage;
