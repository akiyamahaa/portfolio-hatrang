"use client";

import images from "@/constants/images";
import React from "react";
import Card from "./Card";
import Container from "../Container";

import { motion, useInView } from "framer-motion";

const activityOptions = [
  {
    title: "Passion",
    href: "/passion",
    imageSource: images.navhome0,
    description: `From a young age, I've been deeply passionate about sports, particularly swimming and playing chess. Both activities have allowed me to challenge myself in unique ways-physically in the water and mentally on the chessboard.`,
  },
  {
    title: "Projects",
    href: "/my-projects",
    imageSource: images.navhome1,
    description: `Attending VinUniversity will be a transformative step toward realizing my dream of inspiring Vietnamese youth to reconnect with and elevate our agricultural products.`,
  },
  {
    title: "Extracurricular",
    href: "/extracurricular",
    description: `My extracurricular activities are not just hobbies they are the passions that shape my skills, broaden my perspective, and fuel my growth beyond the classroom`,
    imageSource: images.navhome2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time between animations of each card
    },
  },
};

const cardVariants = {
  hidden: { x: -100, opacity: 0 }, // Smaller offset for smoother start
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }, // Shorter duration
  },
};

const MyActivity = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 }); // Trigger only once

  return (
    <div className="bgActivity flex justify-center items-center py-32">
      <Container style="overflow-visible space-y-12">
        <h1 className="text-[40px] md:text-[70px] text-primary-500 font-hatton text-center">
          MY JOURNEY
        </h1>
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3  gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {activityOptions.map((activity) => (
            <motion.div
              key={activity.title}
              variants={cardVariants}
              className=""
            >
              <Card
                title={activity.title}
                imageSource={activity.imageSource}
                href={activity.href}
                description={activity.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default MyActivity;
