import React from "react";

function Videopage() {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen object-cover overflow-hidden absolute rounded-3xl">
        <video autoPlay loop muted src="src/video/project 3.webm"></video>
      </div>
      <div className="text w-full h-screen font-bold bg-[#00000000] absolute">
          <div className="first text-[6.7vw] pt-56 pl-96">
            <h1>Digital products</h1>
          </div>
          <div className="second text-[6.7vw] pl-56 -mt-10">
            <h1>creatives & immersives*</h1>
          </div>
        <div className="ml-96 pl-56 text-[1vw]">
          <p>We think and design unique experiences</p>
          <p>for tomorrow's innovatives products.</p>
        </div>
      </div>
    </div>
  );
}

export default Videopage;
