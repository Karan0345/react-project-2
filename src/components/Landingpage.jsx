import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div className="w-full h-screen pt-1 absolute bg-[#000000af] rounded-3xl">
      <div className="text mt-40 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="heading">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <div className="w-[8vw] h-[5.7vw] mr-[1vw] ml-[1vw] rounded-md -mt-[1vw]">
                    <div className="w-full h-screen object-cover">
                      <video autoPlay loop muted src="/src/video/section 3.webm"></video>
                    </div>
                    
                  </div>
                )}
                <h1 className="text-[7.5vw] font-semibold uppercase leading-[6vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 border-[1px] rounded-full border-zinc-400 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
