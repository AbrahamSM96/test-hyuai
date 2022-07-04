import Carousel from "@components/Carousel";
import MainLayout from "@layout/MainLayout";
import React from "react";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import SectionGray2 from "./SectionGray2";

export default function Intro() {
  return (
    <>
      <Carousel />
      <Section1 />
      <SectionGray2 />
      <Section3 />
      <Section4 />
    </>
  );
}
