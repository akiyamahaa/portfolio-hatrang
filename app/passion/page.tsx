import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Content from "@/components/passion/Content";
import images from "@/constants/images";
import React from "react";

const PassionPage = () => {
  return (
    <div className="mt-20">
      <Hero
        images={[
          images.passionBanner3,
          images.passionBanner2,
          images.passionBanner1,
        ]}
      />
      <Content />
      <Footer />
    </div>
  );
};

export default PassionPage;
