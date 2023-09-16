import React from "react";

const scroll = () => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#111] border-y border-[#eaeaea] dark:border-[#333] mt-24">
      <div className="max-w-[1248px] mx-auto flex p-8 grow flex-wrap flex-col md:flex-row">
        <div className="lg:border-r border-[#eaeaea] dark:border-[#333] px-7 flex flex-col grow justify-center items-center flex-wrap md:my-8 my-5 lg:my-0">
          <p className="text-6xl font-bold">90</p>
          <span className="text-sm text-center dark:text-[#888888] uppercase font-semibold pt-1">Cities</span>
        </div>
        <div className="lg:border-r border-[#eaeaea] dark:border-[#333] px-7 flex flex-col grow justify-center items-center flex-wrap md:my-8 my-5 lg:my-0">
          <p className="text-6xl font-bold">41B+</p>
          <span className="text-sm text-center dark:text-[#888888] uppercase font-semibold pt-1">Requests Per Week</span>
        </div>
        <div className="lg:border-r border-[#eaeaea] dark:border-[#333] px-7 flex flex-col grow justify-center items-center flex-wrap md:my-8 my-5 lg:my-0">
          <p className="text-6xl font-bold">10PB</p>
          <span className="text-sm text-center dark:text-[#888888] uppercase font-semibold pt-1">Data Served</span>
        </div>
        <div className="px-7 flex flex-col grow justify-center items-center flex-wrap my-8 lg:my-0">
          <p className="text-6xl font-bold">99.99%</p>
          <span className="text-sm text-center dark:text-[#888888] uppercase font-semibold pt-1">Guaranteed Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default scroll;
