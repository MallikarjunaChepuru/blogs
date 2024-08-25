import React from "react";

const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/** left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/** right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 uses of artificial Intelligence in Day to Day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-grey-500 items-center justify-between  md:mb-4">
          <p>@Mallikarjuna</p>
          <div className="flex space-x-2 text-sm">
            <p>24/08/2024</p>
            <p>16:12</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Artificial intelligence (AI) is a set of technologies that allow
          computers to perform tasks that were previously thought to be the sole
          domain of humans, such as reasoning, making decisions, and solving
          problems
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
