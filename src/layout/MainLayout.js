import React from "react";
import Header from "@components/Header";
import Carousel from "@components/Carousel";
import Footer from "@components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
