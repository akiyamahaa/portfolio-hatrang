import Image from "next/image";
import Container from "../Container";
import images from "@/constants/images";

const About = () => {
  return (
    <div
      className="bg-fixed bgHome overflow-hidden pt-32"
      // style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <Container>
        <div className="flex flex-col xl:flex-row justify-between items-center gap-6">
          <div className="flex-1 space-y-10">
            <div className="">
              <h1 className="text-[64px] md:text-[96px] xl:text-[104px] leading-[64px] md:leading-[96px] xl:leading-[116px] font-semibold font-hatton text-center md:text-start">
                <span className="text-white">Hi! I Am</span> <br />
                <span className="text-primary-400">Ha Trang</span>
                <br />
                <span className="text-white">Dang</span>
              </h1>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-sm md:text-base text-white text-center md:text-start">
                I&apos;m an energetic and ambitious young girl with a passion
                for learning and a vision to make a mark in the business world.
                My journey began with a deep appreciation for Vietnam&apos;s
                agricultural heritage and market trends, which later grew into a
                desire to become Vietnam&apos;s agricultural ambassador. This
                path is defined by a combination of strategic insight,
                leadership, and creativity. Alongside my academic pursuits,
                I&apos;ve always had a keen eye for event management. This led
                me to become the organizer of Chương trình Tri ân - Trưởng thành
                Minh Khai, where I discovered the art of merging style with
                leadership. My passion and creativity were recently recognized
                on a larger scale when I became the first author of the journal
                “Adoption of E-Commerce in Vietnam&apos;s Agricultural Business
                Sector, where I creatively presented data and turned complex
                insights into a compelling narrative, shedding light on the
                values and challenges of Vietnamese farmers. This experience
                validated my love for marketing, solidifying my resolve to
                innovate and lead in the business world.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image src={images.homeBannerImg} alt="image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
