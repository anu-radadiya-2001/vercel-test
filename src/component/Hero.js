"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Okta from "../assets/images/okta.svg";
import Adobe from "../assets/images/adobe.svg";
import Washingtonpost from "../assets/images/washingtonpost.svg";
import TailwindcssLogo from "../assets/images/tailwindcss_logo.svg";
import Hashicorp from "../assets/images/hashicorp.svg";
import Loom from "../assets/images/loom.svg";
import Zapier from "../assets/images/zapier.svg";
import Ebay from "../assets/images/ebay.svg";
import UnderArmou from "../assets/images/under-armour.svg";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
      <section className="xl:py-20 lg:py-16  lg:mt-0 mt-14">
        <div className="container">
          <h1 className="dark-color xl:text-[112px] lg:text-[80px] md:text-[90px] dark:text-[#EDEDED] -tracking-wider text-7xl justify-center items-center font-extrabold flex leading-none mb-10 lg:flex-row flex-col">
            <span className="animated-gradient-text develop-animated-text">
              <span className="develop-animated">Develop.</span>
            </span>
            <span className="animated-gradient-text preview-animated-text">
              <span className="preview-animated">Preview.</span>
            </span>
            <span className="animated-gradient-text ship-animated-text">
              <span className="ship-animated">Ship.</span>
            </span>
          </h1>
          <h2 className="md:text-2xl text-xl text-[#666] dark:text-[#888888] leading-normal tracking-[-0.48px] w-full max-w-[780px] mx-auto text-center mb-16">
    {"Vercel's frontend cloud gives developers the frameworks, workflows,
            and infrastructure to build a faster, more personalized Web."}
          </h2>
          <div className="flex items-center gap-6 justify-center mb-[96px] sm:flex-row flex-col">
            <Link
              className="flex justify-center items-center w-full sm:max-w-[188px] dark:text-[#0A0A0A] max-w-full gap-2 font-medium py-3 px-4 rounded-lg bg-[#171717] dark:bg-[#EDEDED] hover:bg-[#383838] text-white transition-all"
              href=""
            >
              <svg
                aria-label="Vercel Logo"
                fill="#fff"
                viewBox="0 0 75 65"
                height="15.600000000000001"
                width="18"
                className="dark:invert"
              >
                <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
              </svg>
              Start Deploying
            </Link>
            <Link
              className="get-a-demo-btn justify-center relative w-full sm:max-w-[188px] max-w-full h-[48px] text-center hover:text-white transition-all duration-150 font-medium py-2 px-4 rounded-lg group"
              href=""
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                Get a Demo
              </span>
              <span className="absolute top-0 left-0 right-0 w-full h-full get-demo-animated-one"></span>
              <span className="absolute top-0 left-0 right-0 w-full h-full get-demo-animated-two"></span>
              <span className="absolute top-0 left-0 right-0 w-full h-full get-demo-animated-three"></span>
              <span className="absolute top-[1px] bottom-[1px] left-[1px] right-[1px] w-[calc(100%-2px)] dark:bg-black dark:text-white h-[calc(100%-2px)] rounded-[7px] bg-white z-40 group-hover:bg-transparent transition-all duration-150"></span>
            </Link>
          </div>
          <div className="tracking-[0.2rem] text-xs text-[#666] dark:text-black font-bold uppercase text-center w-full mx-auto max-w-[900px]">
            <p className="mb-12 dark:text-[#888888]">Trusted by the best frontend teams</p>
            <div className="lg:block hidden">
              <div className="flex justify-between items-center h-[47px] gap-10">
                <Image
                  className="h-auto dark:invert"
                  width={116.28}
                  src={Adobe}
                  alt="logo"
                />
                <Image className="h-auto dark:invert" width={79.56} src={Okta} alt="logo" />
                <Image
                  className="h-auto dark:invert"
                  width={66}
                  src={UnderArmou}
                  alt="logo"
                />
                <Image className="h-auto dark:invert" width={81.6} src={Ebay} alt="logo" />
                <Image className="h-auto dark:invert" width={102} src={Zapier} alt="logo" />
              </div>
              <div className="flex justify-between h-[47px] mt-6 gap-10">
                <Image
                  className="h-auto dark:invert"
                  width={108.12}
                  src={Loom}
                  alt="logo"
                />
                <Image
                  className="h-auto dark:invert"
                  width={131.9}
                  src={Hashicorp}
                  alt="logo"
                />
                <Image
                  className="h-auto dark:invert"
                  width={179.52}
                  src={TailwindcssLogo}
                  alt="logo"
                />
                <Image
                  className="h-auto dark:invert"
                  width={212.28}
                  src={Washingtonpost}
                  alt="logo"
                />
              </div>
            </div>
          </div>

          <div className="slider md:mt-[70px] lg:!hidden">
              <Marquee>
                <Image
                  className="h-auto mx-8 dark:invert"
                  width={116.28}
                  src={Adobe}
                  alt="logo"
                />
                <Image className="h-auto mx-8 dark:invert" width={79.56} src={Okta} alt="logo" />
                <Image
                  className="h-auto mx-8 dark:invert"
                  width={66}
                  src={UnderArmou}
                  alt="logo"
                />
                <Image className="h-auto mx-8 dark:invert" width={81.6} src={Ebay} alt="logo" />
                <Image className="h-auto mx-8 dark:invert" width={102} src={Zapier} alt="logo" />
                <Image
                  className="h-auto mx-8 dark:invert"
                  width={108.12}
                  src={Loom}
                  alt="logo"
                />
                <Image
                  className="h-auto mx-8 dark:invert"
                  width={131.9}
                  src={Hashicorp}
                  alt="logo"
                />
                <Image
                  className="h-auto mx-8 dark:invert"
                  width={179.52}
                  src={TailwindcssLogo}
                  alt="logo"
                />
                <Image
                  className="h-auto mx-8 dark:invert"
                  width={212.28}
                  src={Washingtonpost}
                  alt="logo"
                />
              </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
