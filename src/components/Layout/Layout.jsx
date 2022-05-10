import { Container, Box } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <React.Fragment>
      <Navbar onSidebarOpen={(e) => setIsSidebar(true)} />
      <Sidebar isOpen={isSidebar} onSidebarClose={(e) => setIsSidebar(false)} />
      {children}
      <Footer />
    </React.Fragment>
  );
}
