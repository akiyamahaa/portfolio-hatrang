"use client";

import Container from "./Container";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import images from "@/constants/images";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navOptions = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Passion",
    href: "/passion",
  },
  {
    title: "My Projects",
    href: "/my-projects",
  },
  {
    title: "Extracurricular",
    href: "/extracurricular",
  },
];

const Header = () => {
  const pathname = usePathname();

  const isLight = pathname !== "/"; // Check if the pathname is "/"
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    router.push(id);
  };

  return (
    <div
      className={cn(
        "py-6 fixed top-0 left-0 right-0 z-max",
        isLight && "bg-white shadow-sm"
      )}
    >
      <Container>
        <div className="flex flex-row justify-between items-center">
          <Link href="/">
            <div className="flex flex-row items-center gap-4">
              <Image
                src={isLight ? images.logoLight : images.logoDark}
                alt="logo"
                className="w-full max-w-40 h-8"
              />
            </div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block w-6 h-1 bg-black transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-black transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-black transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Menu (hidden in mobile) */}
          <ul className="hidden md:flex flex-row gap-10">
            {navOptions.map((nav) => (
              <button onClick={() => handleScrollTo(nav.href)} key={nav.title}>
                <li
                  className={`text-lg ${
                    pathname === nav.href
                      ? "text-primary-500 font-bold" // Active style
                      : isLight
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {nav.title}
                </li>
              </button>
            ))}
          </ul>

          {/* Modal for Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className=" p-6 w-3/4 rounded-lg relative bg-white">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &times;
                </button>

                {/* Mobile Menu */}
                <ul className="flex flex-col gap-4 items-center">
                  {navOptions.map((nav) => (
                    <button
                      onClick={() => {
                        handleScrollTo(nav.href);
                        setIsMenuOpen(false);
                      }}
                      key={nav.title}
                    >
                      <li
                        className={`text-lg ${
                          pathname === nav.href
                            ? "text-primary-500 font-bold" // Active style
                            : isLight
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {nav.title}
                      </li>
                    </button>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
