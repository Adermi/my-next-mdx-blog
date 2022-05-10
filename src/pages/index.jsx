import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";
import HomeArticle from "../components/HomeArticle";

export default function index() {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: "url(/images/星空.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "0 -250px",
          width: "100%",
          height: "50vh",
        }}
      >
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" color="#fff" sx={{ mt: 7, fontWeight: 100 }}>
            优质的内容带来优质的学习效果
          </Typography>
          <Typography variant="h5" color="#fff" sx={{ mt: 7, fontWeight: 0 }}>
            获取最新的博客内容
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <HomeArticle></HomeArticle>
      </Container>
    </React.Fragment>
  );
}

index.getLayout = ({ children, ...props }) => (
  <Layout {...props}>{children}</Layout>
);
