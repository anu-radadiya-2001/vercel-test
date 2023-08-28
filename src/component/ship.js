"use client";
import React from "react";
import Image from "next/image";
import global from "../assets/images/global-icon.svg";
import monitoring from "../assets/images/monitoring-icon.svg";
import Draggable from "./Draggable";
import Globe from "./Globe";


const ship = () => { 
  return (
    <>
      <div className="mx-auto justify-center items-center flex flex-col px-3">
        <span className="self-center w-[1px] h-[100px] ship-line md:hidden sm:block block"></span>
        <div className="ship-sec rounded-full flex justify-center items-center">
          <span className="text-white dark:text-black">3</span>
        </div>
        <span className="ship-text text-[32px] font-bold my-6">Ship</span>
        <h2 className="md:text-6xl text-[40px] font-bold dark:text-[#dfdfdf] md:text-left text-center">
          Delight every visitor
        </h2>
      </div>
      <div className="flex max-w-[1200px] mx-auto lg:flex-row sm:flex-col flex-col lg:items-start items-center gap-y-8">
        <div className="lg:mt-20 mt-10 md:max-w-[628px] w-full md:px-3 px-6 lg:text-left text-center">
          <h3 className="text-[22px] text-[#171717] dark:text-[#ededed] font-semibold">
            Speed is critical to customers — and SEO
          </h3>
          <h4 className="font-normal text-xl text-[#171717] dark:text-[#ededed] mt-3">
            Next.js and Vercel work together to deliver the best performance for
            your end users, while maintaining best-in-class SEO practices.
          </h4>
          <p className="mt-8 text-base text-[#666666] dark:text-[#A1A1A1] font-normal lg:max-w-[496px]">
            Built on cutting-edge serverless technology, Vercel can withstand
            any traffic spike, with automatic failover and global replication of
            assets.
          </p>
          <div className="mt-10 lg:max-w-[485px]">
            <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333] bg-[#fafafa] dark:bg-[#333] rounded-lg flex items-center justify-center lg:ml-0 mx-auto">
              <Image
                src={global}
                alt="global"
                className="relative contrast-50 w-6 h-6 dark:invert lg:ml-auto mx-auto"
              />
            </div>
            <h4 className="text-[22px] font-semibold my-2">
              Global Edge Network
            </h4>
            <p className="text-[#666] dark:text-[#888888] leading-7">
              Your site, fast everywhere. Deploy content around the world and
              update it in 300ms.
            </p>
            <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333] bg-[#fafafa] dark:bg-[#333] rounded-lg flex items-center justify-center mt-10 lg:ml-0 mx-auto">
              <Image
                src={monitoring}
                alt="monitoring "
                className="relative contrast-50 w-6 h-6 dark:invert lg:ml-auto mx-auto"
              />
            </div>
            <h4 className="text-[22px] font-semibold my-2">
              First-party monitoring and observability
            </h4>
            <p className="text-[#666] leading-7 dark:text-[#888888]">
              Analyze logs, understand traffic and usage, and easily optimize
              your applications, without extra tooling or code.
            </p>
            <div className="flex mt-8 sm:whitespace-nowrap border px-1 py-[6px] w-full max-w-fit lg:mx-0 mx-auto items-center gap-2 rounded-full bg-[#fafafa] dark:bg-[#111111] dark:border-[#333]">
              <button className="bg-[#fc6d26] px-2 rounded-full text-white block text-xs mr-1 dark:text-black">
                New
              </button>
              <a href="#0" className="text-sm text-[#666] dark:text-[#888888] md:block hidden">
                Monitoring is now available for Pro and Enterprise customers → </a>
                <a href="#0" className="text-sm text-[#666] dark:text-[#888888] md:hidden block">
                 now available for Pro and Enterprise customers → </a>
            </div>
          </div>
         
          {/* ------------------------ */}
        </div>
        <div className="relative earth-rounde-overlay dark:invert">
        <div>
            <Draggable />
          </div>
        </div>
      </div>
    </>
  );
};

export default ship;
