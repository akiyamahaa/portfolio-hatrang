import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Content from "@/components/social/Content";

import images from "@/constants/images";
import React from "react";

const SocialSupportPage = () => {
  return (
    <div className="mt-20">
      <Hero
        images={[images.extraBanner3, images.extraBanner2, images.extraBanner1]}
      />
      <Content />
      <Footer />
    </div>
  );
};

export default SocialSupportPage;
