import { styled, Container } from "@mui/material";
import React, {useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [isSidebar, setIsSidebar] = useState(false)

  return (
    <React.Fragment>
      <Navbar onSidebarOpen={e => setIsSidebar(true)}/>
      <Sidebar isOpen={isSidebar} onSidebarClose={e => setIsSidebar(false)}/>
      <Container maxWidth="md" sx={{mt: 8}}>{children}</Container>
    </React.Fragment>
  );
}
