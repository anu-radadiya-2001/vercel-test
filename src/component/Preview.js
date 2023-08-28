import React from "react";
import Image from "next/image";
import push from "../assets/images/pushdeploy.png";
import preview from "../assets/images/Automatipreviews.png";
import preview2 from "../assets/images/preview-2.png";
import collaborative from "../assets/images/Collaborative.png";
import pushicon from "../assets/images/push-icon.png";
import automation from "../assets/images/automaticicon.png";
import Collaborativeicon from "../assets/images/collaborativeicon.png";

const Preview = () => {
  return (
    <div className="">
      <div className="mx-auto justify-center items-center flex flex-col mt-12 px-6">
        <span className="self-center w-[1px] h-[100px] Preview-line"></span>
        <div className="Preview-sec rounded-full flex justify-center items-center">
          <span className="text-white dark:text-black">2</span>
        </div>
        <span className="Preview-text text-[32px] font-bold my-6">Preview</span>
        <h2 className="md:text-6xl text-[40px] font-bold text-center leading-tight">
          Iterate with your team
        </h2>
        <p className="max-w-[640px] dark:text-[#a1a1a1] text-[#666666] text-center mt-8 md:text-xl text-xl">
          Make frontend development a collaborative experience with automatic
          Preview Deployments for every code change, by seamlessly integrating
          with
          <a href="#0" className="text-[#de1d8d] ml-1">
            GitHub
          </a>
          ,
          <a href="#0" className="text-[#de1d8d] ml-1">
            GitLab
          </a>
          , and
          <a href="#0" className="text-[#de1d8d] ml-1">
            Bitbucket
          </a>
        </p>
      </div>
      {/* first section code strat  */}
      <div className="max-w-[1152px] mx-auto mt-24">
        <div className="flex flex-col justify-center">
          <p className="preview-line w-[2px] self-center h-[100px] md:hidden"></p>
          <span className="self-center w-2 h-2 rounded-full my-1 shadow-[0_0px_0px_1.5px_#999] z-10 md:hidden sm:block block"></span>
        </div>
        <div className="flex justify-center md:items-start items-center sm:flex-col md:flex-row flex-col px-6 ">
          <div className="lg:pr-[64px] sm:max-w-[48%] w-full">
            <Image
              src={push}
              alt="push"
              className="relative rounded-md mr-2 w-full dark:invert"
            />
          </div>
          <div className="flex flex-col">
            <p className="preview-line w-[2px] self-center h-[100px]"></p>
            <span className="w-2 h-2 rounded-full my-1 shadow-[0_0px_0px_1.5px_#999] z-10"></span>
            <span className="border-[#999] self-center dark:border-[#444] border-dashed border-r-[1px] h-[399px] md:block sm:hidden hidden"></span>
          </div>
          <div className="lg:px-[64px] md:pl-6 sm:max-w-[48%] w-full sm:order-[-1] md:order-1 order-[-1] sm:text-center md:text-left text-center md:mt-24 mt-5">
            <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333333] dark:bg-[#333333] rounded-lg flex items-center justify-center sm:mx-auto md:mx-0 mx-auto">
              <Image
                src={pushicon}
                alt="next"
                className="relative w-5 h-5 contrast-50 dark:invert"
              />
            </div>
            <h4 className="text-[22px] font-semibold my-2">Push to deploy</h4>
            <p className="text-[#666] leading-7 dark:text-[#888888]">
              Every deploy automatically generates a shareable live preview site
              that stays up-to-date with your changes.
            </p>
          </div>
        </div>
      </div>
      {/* second section code start */}
      <div className="max-w-[1152px] mx-auto">
        <div className="flex justify-center md:items-start items-center sm:flex-col md:flex-row flex-col px-6">
          <div className="lg:pr-[64px] sm:max-w-[48%] w-full md:-translate-y-20 md:mt-0 mt-4">
            <Image
              src={preview}
              alt="preview"
              className="relative rounded-md mr-2 w-full dark:invert block dark:hidden"
            />
            <Image
              src={preview2}
              alt="preview2"
              className="relative rounded-md mr-2 w-full  hidden dark:block"
            />
          </div>
          <div className="flex flex-col">
            <p className="preview-line w-[2px] self-center h-[100px] dark:bg-[#444] md:hidden sm:block block"></p>
            <span className="w-2 h-2 rounded-full my-1 shadow-[0_0px_0px_1.5px_#999] z-10"></span>
            <span className="border-[#999] self-center border-dashed border-r-[1px] h-[399px] md:block sm:hidden hidden dark:border-[#444]"></span>
          </div>
          <div className="lg:px-[64px] md:pl-6 md:max-w-[48%] w-full sm:order-[-1] md:order-1 order-[-1] sm:text-center md:text-left text-center md:mt-0 mt-6">
            <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333333] dark:bg-[#333333] rounded-lg flex items-center justify-center sm:mx-auto md:mx-0 mx-auto">
              <Image
                src={automation}
                alt="next"
                className="relative w-5 h-5 contrast-50 dark:invert"
              />
            </div>
            <h4 className="text-[22px] font-semibold my-2">
              Automatic Previews for every branch
            </h4>
            <p className="text-[#666] leading-7 dark:text-[#888888]">
              Each new branch receives a live, production-like URL that everyone
              on your team can visit.
            </p>
          </div>
        </div>
      </div>
      {/* third section code start  */}
      <div className="max-w-[1152px] mx-auto">
        <div className="flex justify-center md:items-start items-center sm:flex-col md:flex-row flex-col px-6">
          <div className="lg:pr-[64px] sm:max-w-[48%] w-full md:-translate-y-24">
            <Image
              src={collaborative}
              alt="collaborative"
              className="relative rounded-md mr-2 w-full mt-6 dark:invert"
            />
          </div>
          <div className="flex flex-col">
            <span className="w-2 h-2 rounded-full my-1 shadow-[0_0px_0px_1.5px_#999] z-10 md:block sm:hidden hidden"></span>
            <span className="collaborative-line self-center border-r-[1px] h-[500px] md:block sm:hidden hidden"></span>
          </div>
          <div className="sm:order-[-1] md:order-1 order-[-1] w-full sm:max-w-[48%]">
            <div className="lg:pl-[64px] md:pl-6 h-fit sm:text-center md:text-left text-center md:mt-0 mt-6">
              <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333333] dark:bg-[#333333] rounded-lg flex items-center justify-center sm:mx-auto md:mx-0 mx-auto">
                <Image
                  src={Collaborativeicon}
                  alt="next"
                  className="relative w-5 h-5 contrast-50 dark:invert"
                />
              </div>
              <h4 className="text-[22px] font-semibold my-2">
                Collaborative reviews on UI
              </h4>
              <p className="text-[#666] dark:text-[#888888] leading-7 w-full md:max-w-[401px]">
                Comment directly on components, layouts, copy, and more in real
                context and real time, integrated seamlessly with GitHub and
                Slack.
              </p>
              <div className="flex items-center mt-8 xl:whitespace-nowrap border p-[6px] gap-1 dark:border-[#333] w-fit rounded-full bg-[#fafafa] dark:bg-[#111111]">
                <button className="bg-[#eb367f] px-2 rounded-full text-white dark:text-black text-xs flex justify-center items-center whitespace-nowrap">
                  New
                </button>
                <a
                  href="#0"
                  className="text-sm text-[#666] dark:text-[#888888]"
                >
                  Commenting on Preview Deployments is now available →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
