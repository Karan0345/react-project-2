import React from "react";

function Next() {
  return (
    <div className="main w-full h-screen bg-[#ffffff5e] text-black flex rounded-3xl">
      <div className="left w-[50%] h-screen overflow-hidden">
        <div className="video w-full h-screen mt-24 ml-24">
          <video autoPlay loop muted src="section 3.webm"></video>
        </div>
      </div>
      <div className="right w-[50%] h-screen ">
        <div className="text font-bold text-[3vw] mt-24 uppercase">
          <h1>Give life to your ideas</h1>
        </div>
        <div className="text1 text-[2vw] pt-16 pr-32 pl-10">
          <p>
            We pool our expertise to turn your wildest projects into singular
            experiences.
          </p>
          <p className="pt-16">
            Discover our diverse expertise, each one providing a unique
            dimension to your vision.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Next;
