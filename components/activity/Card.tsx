import { ArrowRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  imageSource: string | StaticImport;
  title: string;
  description: string;
  href: string;
};

const Card = ({ imageSource, title, href, description }: Props) => {
  return (
    <div className="w-full">
      <div className="w-full items-center gap-6 space-y-5">
        <Image src={imageSource} alt="image-activity" className="w-full" />
        <div>
          <p className="font-hatton text-gray-800 text-[24px] md:text-[32px]">
            {title}
          </p>
          <p className="font-hatton text-gray-500 text-sm md:text-base line-clamp-2">
            {description}
          </p>
          <div className="mt-4">
            <Link href={href}>
              <div className="rounded-full border flex flex-row items-center gap-1 border-gray-300 text-gray-800 text-base font-semibold px-4  py-2 w-fit hover:opacity-80">
                View All
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
