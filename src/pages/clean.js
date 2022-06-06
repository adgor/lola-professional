import * as React from "react";
import Layout from "../components/layout/layout.js";
import { CtaLight } from "../components/sections/CtaLight.js";
import { ServicesList } from "../components/ServicesList.js";
import { Faq } from "../components/Faq.js";

// markup
const Clean = () => {
  return (
    <Layout>
      <h1 className=" text-4xl">Hero Section</h1>
      <CtaLight />
      <ServicesList />
      <Faq />
    </Layout>
  );
};

export default Clean;
