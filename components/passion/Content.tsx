import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import DivAnim from "../animation/DivAnim";

const Content = () => {
  return (
    <div className="bg-bgContent">
      <Container>
        <DivAnim className="pt-32 space-y-12">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row item-start justify-between gap-12">
              <p className="text-gray-800 text-lg w-full md:w-1/2 xl:w-2/3">
                From a young age, I&apos;ve been deeply passionate about sports,
                particularly swimming and playing chess. Both activities have
                allowed me to challenge myself in unique ways—physically in the
                water and mentally on the chessboard. I’ve always felt joy and
                confidence when competing, whether it’s achieving personal bests
                in swimming or strategizing my moves in a tense chess match.
                This passion has driven me to actively participate in school
                cultural activities, community events, and various competitions.
              </p>
              <Image
                src={images.passionImg1}
                alt="passion-img"
                className="w-full md:w-1/2 xl:w-1/3 rounded-3xl min-h-[320px]"
              />
            </div>
            <Image
              src={images.passionImg2}
              alt="passion-img"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="text-gray-800 text-lg">
            As time passed, my enthusiasm for sports only grew stronger.
            I&apos;ve continually sought to learn, explore, and hone my skills,
            branching out into new areas like athletics and, more notably,
            badminton. My confidence, resilience, and ability to strategize and
            work with others have solidified, making sports an irreplaceable
            part of my life.
          </div>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src={images.passionImg3}
                className="rounded-3xl h-[376px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.passionImg4}
                className="rounded-3xl h-[376px] object-cover"
                alt="img-passion"
              />
            </div>
            <p className="text-gray-800 text-lg">
              During that joyful childhood, my mother also enrolled me in piano
              lessons. I vividly recall the first time my fingers touched the
              keys—the sound was enchanting and drew me in immediately. Over
              time, I I learned to sense each note, each melody, and how they
              intertwined to create a complete musical composition. The piano
              became more than just an instrument; it became a medium through
              which I could express my emotions and immerse myself in the world
              of music. Every time I sit at the piano, I feel as if I&apos;m
              stepping into another world, one where I can lose myself in its
              rich and emotive harmonies. Daily practice not only sharpens my
              piano skills but also reinforces my patience and focus. To me, the
              piano is not just a hobby; it&apos;s a significant part of my
              life, a source of happiness, tranquility, and inspiration to keep
              chasing my dreams.
            </p>
          </div>
        </DivAnim>
      </Container>
    </div>
  );
};

export default Content;
