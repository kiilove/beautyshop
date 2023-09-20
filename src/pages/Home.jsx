import React from "react";
import SmMain from "../layouts/SmMain";
import MdMain from "../layouts/MdMain";
import FullMain from "../layouts/FullMain";
import Topmenu from "../components/Topmenu";
import { defaultBgColor } from "../constColors";
import { defaultMaxWidth, defaultTopHeight } from "../constSizes";

const Home = () => {
  return (
    <>
      <div
        className="flex w-full min-h-screen flex-col"
        style={{ backgroundColor: defaultBgColor }}
      >
        <div className="flex w-full" style={{ height: defaultTopHeight }}>
          <Topmenu />
        </div>
        <div className="flex max-h-full w-full justify-center items-start">
          <div
            className="flex w-full h-auto"
            style={{ maxWidth: defaultMaxWidth }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
