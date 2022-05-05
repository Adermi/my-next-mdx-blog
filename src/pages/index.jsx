import React from "react";
import Layout from "../components/Layout/Layout";

export default function index() {
  return (
    <React.Fragment>
      <div>index</div>
      <div>index</div>
      <div>index</div>
      <div>index</div>
      <div>index</div>
      <div>index</div>
      <div>index</div>
    </React.Fragment>
  );
}

index.getLayout = ({ children, ...props }) => (
  <Layout {...props}>{children}</Layout>
);
