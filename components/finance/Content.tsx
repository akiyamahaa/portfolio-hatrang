import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import DivAnim from "../animation/DivAnim";
import Flipbook from "./Flipbook";

const Content = () => {
  return (
    <div id="project-content">
      <Container>
        <DivAnim className="py-32 space-y-12">
          {/* Research */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-12">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-6xl font-semibold text-gray-800">
                  Scientific Research
                </h1>
                <p className="text-base md:text-lg text-gray-600">
                  May 2024 - August 2024
                </p>
                <p className="text-base md:text-xl text-gray-800">
                  Co-author with Phd Nghiem Bao Anh
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-600">
                  In collaboration with Dr. Nghiem Bao Anh, I co-authored a
                  research study titled “The Adoption of Digital Marketing and
                  Online Sales Channels for Agricultural Products in Vietnam,”
                  scheduled for publication in late 2024. This work delves into
                  the transformative potential of e-commerce and digital
                  marketing within Vietnam’s agricultural sector.
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  Driven by the need for improved marketing strategies, I
                  spearheaded the development of a journal that presents a
                  compelling narrative on the values and challenges of
                  Vietnamese farmers. I played a pivotal role in gathering data
                  through surveys and analyzing case studies from agricultural
                  SMEs in Vietnam’s southern regions. Additionally, I co-wrote
                  sections exploring national and regional agricultural trends,
                  identifying barriers to digital adoption, and proposing
                  actionable solutions to enhance online marketing practices.
                  This research not only contributed to understanding the
                  digital shift in agriculture but also aimed to inform future
                  strategies for bridging traditional farming practices with
                  modern technological solutions.
                </p>
              </div>
            </div>
            <div>
              <Flipbook
                bookIframe={
                  <iframe
                    scrolling="no"
                    className="bg-background w-full h-[800px] 
              "
                    src="https://heyzine.com/flip-book/9c68e7f34b.html"
                  ></iframe>
                }
              />
            </div>
          </div>
          {/* Aspirations */}
          <div className="flex flex-col text-center md:text-start xl:flex-row items-start xl:items-center gap-8 py-32">
            <div className="w-full xl:w-1/2 xl:pr-20 relative">
              <Image
                src={images.projectImg1}
                alt="img"
                className="rounded-3xl h-[622px]"
              />
              <Image
                src={images.projectImg2}
                alt="img"
                className="rounded-3xl w-[220px] h-[300px] absolute right-0 bottom-20 hidden xl:block"
              />
            </div>
            <div className="w-full xl:w-1/2 space-y-8">
              <h1 className="text-4xl xl:text-6xl font-semibold text-gray-800">
                ASPIRATIONS
              </h1>
              <p className="text-base xl:text-lg text-gray-600">
                Attending VinUniversity will be a transformative step toward
                realizing my dream of inspiring Vietnamese youth to reconnect
                with and elevate our agricultural products. The Business
                Administration program provides the ideal combination of
                theoretical knowledge and practical skills needed to address the
                challenges in modern agriculture while fostering innovation. By
                utilizing creative marketing strategies and innovative
                communication approaches, I aim to create initiatives that make
                agriculture appealing and relevant to the younger generation.
                Through these efforts, I envision not only revitalizing
                Vietnam’s agricultural sector but also laying the foundation for
                its growth on a global scale, showcasing the potential of our
                youth to lead the change.
              </p>
            </div>
          </div>
        </DivAnim>
      </Container>
    </div>
  );
};

export default Content;
