import * as React from "react";
import Navbar from "./navbar";
import { Footer } from "./footer";


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
