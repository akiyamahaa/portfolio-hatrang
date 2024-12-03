import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import DivAnim from "../animation/DivAnim";
import Gallery from "../Gallery";
import VideoCard from "../passion/VideoCard";

const maboImg = [
  images.extraImg4,
  images.extraImg5,
  images.extraImg6,
  images.extraImg7,
  images.extraImg8,
  images.extraImg9,
  images.extraImg10,
  images.extraImg11,
  images.extraImg12,
  images.extraImg13,
];

const listCert = [
  images.extraImg34,
  images.extraImg35,
  images.extraImg36,
  images.extraImg37,
  images.extraImg38,
  images.extraImg39,
  images.extraImg40,
  images.extraImg41,
  images.extraImg42,
  images.extraImg43,
];

const Content = () => {
  return (
    <div>
      {/* Part 1 */}
      <Container>
        <DivAnim className="py-32 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Image src={images.extraFrame} alt="img" />
            <p className="text-xl text-gray-800">
              As a Marketing Intern at Đạm Cà Mau, I received extensive training
              in market analysis, consumer behavior, and digital marketing
              strategies, preparing me to support the company’s efforts in
              promoting agricultural products effectively.
            </p>
          </div>
          <div className="space-y-8">
            <p className="text-lg text-gray-500">
              I assisted in conducting market research, analyzing customer data,
              and identifying key trends to optimize product positioning.
              Additionally, I helped organize promotional campaigns targeting
              younger audiences, aiming to boost brand awareness and foster a
              deeper connection between consumers and local agricultural
              products.
            </p>
            <div className="grid grid-col-1 md:grid-cols-3 gap-12">
              <Image
                src={images.extraImg2}
                alt="img"
                className="rounded-3xl h-[380px]"
              />
              <Image
                src={images.extraImg1}
                alt="img"
                className="rounded-3xl h-[460px] mt-0 md:mt-12"
              />
              <Image
                src={images.extraImg3}
                alt="img"
                className="rounded-3xl h-[380px]"
              />
            </div>
            <p className="text-lg text-gray-500">
              In business meetings, I contributed insights on how to leverage
              social media platforms to increase engagement, recommending
              content strategies that aligned with the interests of the youth. I
              also played a key role in redesigning the packaging for several
              product lines, ensuring that the new designs were tailored to
              attract the youth while effectively communicating the stories
              behind the products.
            </p>
            <p className="text-lg text-gray-500">
              This experience enhanced my understanding of marketing, from
              consumer insights and digital strategies to campaign execution and
              performance analysis, supporting Đạm Cà Mau’s goal of
              strengthening its brand presence and reaching a broader, more
              engaged audience.
            </p>
          </div>
        </DivAnim>
      </Container>
      {/* Part 2 */}
      <div className="bgMabo py-32">
        <Container>
          <DivAnim className="space-y-16">
            <div className="text-center">
              <h1 className="text-primary-400 text-3xl md:text-6xl font-semibold">
                Head of teaching department
              </h1>
              <p className="text-xl md:text-2xl text-white">
                (Ma Bó, Lâm Đồng trip)
              </p>
            </div>
            <div className="text-base md:text-lg text-gray-300">
              As part of the V.E.O trip to Ma Bó, I led teaching and marketing
              efforts. In my role, I delivered educational programs centered on
              crucial life skills, particularly water safety—skills I was
              fortunate to learn from a young age, while many children in the
              area lacked such opportunities. I also spearheaded the marketing
              campaign to raise awareness about Ma Bó, a lesser-known region, by
              highlighting its unique culture, challenges, and potential.
              Through creative storytelling and targeted outreach, I not only
              shared the region’s untold stories but also rallied support for
              educational initiatives, ensuring that the trip was both
              meaningful and sustainable. This experience allowed me to blend my
              passion for education with my strategic marketing skills, making a
              tangible difference in the lives of the students and the Ma Bó
              community.
            </div>
            <div>
              <Gallery listImg={maboImg} direction="left" />
            </div>
          </DivAnim>
        </Container>
      </div>
      {/* Part 3 */}
      <Container>
        <DivAnim className="py-32">
          {/* Volunteer */}
          <div className="space-y-12 pb-32">
            <div className="flex flex-col xl:flex-row items-start justify-between">
              <div className="flex flex-row gap-2">
                <h1 className="text-5xl md:text-8xl text-gray-800 font-semibold">
                  Volunteer
                </h1>
                <Image
                  src={images.extraStar}
                  alt="star"
                  className="w-[57px] h-[56px] transform y-neg-3"
                />
              </div>
              <div className="flex flex-row gap-2 items-center bg-primary-400 rounded-lg py-1 px-3">
                <div className="w-[8px] h-[8px] rounded-full bg-gray-800" />
                <p className="text-lg text-gray-800 ">Tân Bình orphanage</p>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-600">
              At Tân Bình orphanage, I volunteered by assisting with the
              children’s education and organizing recreational activities. I
              helped create a safe and supportive environment, offering
              emotional support and ensuring the children felt cared for. This
              experience fueled my passion for making a positive impact and
              reinforced my dedication to helping those in need.
            </p>
            <div className="space-y-6">
              <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <Image
                  src={images.extraImg14}
                  className="rounded-3xl h-[376px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg15}
                  className="rounded-3xl h-[376px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg16}
                  className="rounded-3xl h-[376px] object-cover"
                  alt="img-passion"
                />
              </div>
              <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                <Image
                  src={images.extraImg17}
                  className="rounded-3xl h-[376px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg18}
                  className="rounded-3xl h-[376px] object-cover"
                  alt="img-passion"
                />
              </div>
            </div>
          </div>
          {/* Interpreter */}
          <div className="space-y-16 pb-32">
            <div className="flex flex-col xl:flex-row">
              <div className="flex flex-row w-full md:w-2/3">
                <div>
                  <h1 className="text-5xl md:text-8xl text-gray-800 font-semibold">
                    Interpreter
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-800">
                    at Capstone’s Fall Fair
                  </p>
                </div>
                <Image
                  src={images.extraInterpreter}
                  alt="img"
                  className="h-[132px] w-[120px] mt-8"
                />
              </div>
              <p className="text-base md:text-xl text-gray-500 w-full md:w-1/3">
                As an Interpreter at the Capstone Fall Fair for three months, I
                was responsible for facilitating communication between diverse
                participants and ensuring smooth interactions during the event.
                My role involved translating the school admission’s messages to
                the audience, along with event briefings, and actively promoting
                the event to engage a wider audience.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-600">
                I conducted thorough research on the event’s themes and
                objectives, enabling me to provide accurate and contextually
                relevant translations. This required staying informed about
                current trends and key topics, ensuring that both the language
                and tone were appropriate for the audience.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Guided by Educational PhD. Mark A. Ashwill, I developed my
                communication skills while maintaining a high standard of
                accuracy and professionalism. My goal was to make the event more
                accessible to a broader audience, ensuring everyone could engage
                with the presentations, workshops, and resources available to
                help them navigate their study abroad journeys.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                My experience at the Capstone Fall Fair allowed me to hone my
                language skills while gaining insights into event promotion and
                cross-cultural communication, contributing to the success of the
                event and helping promote its message effectively.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <Image
                  src={images.extraImg19}
                  alt="img"
                  className="rounded-3xl h-[420px] object-cover"
                />
              </div>
              <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                <Image
                  src={images.extraImg20}
                  className="rounded-3xl h-[420px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg21}
                  className="rounded-3xl h-[420px] object-cover"
                  alt="img-passion"
                />
              </div>
            </div>
          </div>
          {/* Organizer */}
          <div className="space-y-12 pb-32">
            <div className="flex flex-col xl:flex-row items-start justify-between">
              <div className="flex flex-row gap-2">
                <h1 className="text-5xl md:text-8xl text-gray-800 font-semibold">
                  Organizer
                </h1>
                <Image
                  src={images.extraStar}
                  alt="star"
                  className="w-[57px] h-[56px] transform y-neg-3"
                />
              </div>
              <div className="flex flex-row gap-2 items-center bg-primary-400 rounded-lg py-1 px-3">
                <div className="w-[8px] h-[8px] rounded-full bg-gray-800" />
                <p className="text-lg text-gray-800 ">
                  Tri ân - Trưởng thành Minh Khai
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-600">
              Over the past two years with the Tri ân - Trưởng thành Minh Khai
              program, my journey from a first-year collaborator to an organizer
              has been a roller coaster of professional and personal growth.
              This experience has sharpened my event planning and leadership
              skills, while also deepening my ability to connect with others and
              foster meaningful experiences that honor gratitude and personal
              milestones.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col xl:flex-row gap-4">
                <Image
                  src={images.extraImg22}
                  className="rounded-3xl h-[376px] object-cover w-full xl:w-1/3"
                  alt="img-passion"
                />

                <Image
                  src={images.extraImg23}
                  className="rounded-3xl h-[376px] object-cover w-full xl:w-2/3"
                  alt="img-passion"
                />
              </div>
              <VideoCard
                caption=""
                videoSource="https://firebasestorage.googleapis.com/v0/b/vivuhanoi-expo.appspot.com/o/organizer-vid.mp4?alt=media&token=5007e3b7-ffb5-4997-b9bb-25ec51734dc7"
              />
            </div>
          </div>
          {/* Head */}
          <div className="space-y-12 pb-32">
            <div className="flex flex-col xl:flex-row items-start justify-between">
              <div className="flex flex-row gap-2">
                <h1 className="text-5xl md:text-8xl text-gray-800 font-semibold">
                  Head
                </h1>
                <Image
                  src={images.extraStar}
                  alt="star"
                  className="w-[57px] h-[56px] transform y-neg-3"
                />
              </div>
              <div className="flex flex-row gap-2 items-center bg-primary-400 rounded-lg py-1 px-3">
                <div className="w-[8px] h-[8px] rounded-full bg-gray-800" />
                <p className="text-lg text-gray-800 ">
                  Organizer of PERK UP YOUR BRAND workshop
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-600">
              I organized and led the “PERK UP YOUR BRAND” workshop, attracting
              50 participants keen to delve into the Business and F&B industry.
              The workshop addressed key topics, including marketing strategies,
              consumer behavior, and the latest trends shaping the food and
              beverage sector.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="hidden xl:w-1/3 xl:block">
                <Image
                  src={images.extraImg29}
                  className="rounded-3xl h-[514px] object-cover"
                  alt="img-passion"
                />
              </div>
              <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src={images.extraImg24}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg25}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg27}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg26}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-600">
              To foster engagement and creativity, I facilitated activities like
              the “Draw by Coffee Grounds” and a thought-provoking debate on the
              topic: "Should Vietnam focus on developing new coffee varieties,
              or should we maintain our position in the global coffee industry
              with our traditional coffee?" These interactive sessions
              encouraged teamwork, sparked meaningful discussions, and provided
              a platform for participants to share their insights on the growth
              potential of the Vietnamese coffee industry. Ultimately, the
              workshop inspired participants to apply the new knowledge they
              gained to real-world business scenarios.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src={images.extraImg28}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg32}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg30}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.extraImg31}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
              </div>
              <div className="hidden xl:w-1/3 xl:block">
                <Image
                  src={images.extraImg29}
                  className="rounded-3xl h-[514px] object-cover"
                  alt="img-passion"
                />
              </div>
            </div>
          </div>
          {/* My Certificate */}
          <div className="space-y-12">
            <h1 className="text-5xl md:text-8xl text-gray-800 font-semibold">
              My Certificates
            </h1>
            <Gallery direction="left" listImg={listCert} />
          </div>
        </DivAnim>
      </Container>
    </div>
  );
};

export default Content;
