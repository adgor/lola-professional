import * as React from "react";
import Layout from "../components/layout/layout.js";
import { Faq } from "../components/Faq.js";
import { ContactHero } from "../components/ContactHero.js";

// markup
const Clean = () => {
  return (
    <Layout>
      <ContactHero />
      <Faq />
    </Layout>
  );
};

export default Clean;
