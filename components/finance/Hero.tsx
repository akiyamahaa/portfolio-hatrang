import { ArrowRight } from "lucide-react";

export default function HeroProject() {
  return (
    <div className="bgProject h-screen relative flex flex-col justify-center">
      <div className="px-20">
        <h1 className="font-hatton text-[40px] md:text-[69px] text-white font-medium">
          Revolutionizing Agriculture through <br /> Collaborative Innovation
          and <br />
          Visionary Solutions.
        </h1>
        <div className="flex flex-col xl:flex-row justify-between gap-20 absolute bottom-9">
          <p className="w-full xl:w-1/3 text-base text-white">
            Step into a future where agriculture is not just a tradition, but a
            thriving, dynamic industry. Discover how empowering the next
            generation with knowledge, technology, and collaboration can reshape
            agriculture into a modern, sustainable force for change.
          </p>
          <div className="w-full xl:w-2/3 flex flex-col items-start gap-8">
            <p className="text-xl text-white">
              Partnering with Farmers and Businesses to Shape the Future of
              Agriculture.
            </p>
            <div className="cursor-pointer hover:opacity-90 py-3 px-5 gap-2 items-center bg-primary-400 rounded-full flex flex-row">
              <p className="font-semibold text-base text-gray-800">
                Explore more
              </p>
              <div className="rounded-full bg-black p-1">
                <ArrowRight size={24} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
